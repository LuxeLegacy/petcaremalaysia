import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const STATE_NAME_MAP: Record<string, string[]> = {
  'selangor': ['Selangor'],
  'kuala-lumpur': ['Kuala Lumpur', 'W.P. Kuala Lumpur', 'WP Kuala Lumpur'],
  'johor': ['Johor'],
  'penang': ['Penang', 'Pulau Pinang'],
  'perak': ['Perak'],
  'sarawak': ['Sarawak'],
  'sabah': ['Sabah'],
  'melaka': ['Melaka', 'Malacca'],
  'kedah': ['Kedah'],
  'pahang': ['Pahang'],
  'kelantan': ['Kelantan'],
  'terengganu': ['Terengganu'],
  'negeri-sembilan': ['Negeri Sembilan'],
  'perlis': ['Perlis'],
  'labuan': ['Labuan', 'F.T. Labuan', 'WP Labuan'],
};

// Hard internal timeout — fail fast with a clean JSON instead of letting the
// gateway 504. Keep well under the gateway's ~10s window.
const QUERY_TIMEOUT_MS = 8000;

async function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return await Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms),
    ),
  ]);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const stateSlug: string = (body.stateSlug || '').toString();
    const language: string = (body.language || 'en').toString();
    // Cap per-batch size to keep individual requests under the gateway timeout.
    const limit: number = Math.min(Math.max(parseInt(body.limit ?? '50', 10) || 50, 1), 100);
    // Keyset cursor: id of the last row from the previous batch (or null for first batch).
    const afterId: string | null = body.afterId ? body.afterId.toString() : null;

    if (!stateSlug) {
      return new Response(
        JSON.stringify({ error: 'stateSlug is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const stateCandidates = STATE_NAME_MAP[stateSlug] || [stateSlug];

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      { auth: { persistSession: false } },
    );

    const queryFor = async (lang: string) => {
      let q = supabase
        .from('pet_qa_keywords')
        .select('id, keyword, question, category, priority, city_slug')
        .in('state', stateCandidates)
        .eq('language', lang)
        // Stable, indexable order: priority desc, then id asc for keyset paging.
        .order('priority', { ascending: false })
        .order('id', { ascending: true })
        .limit(limit);

      if (afterId) {
        // Keyset paging by id only — works because (priority desc, id asc) is
        // a strict total ordering once priority ties are broken by id.
        q = q.gt('id', afterId);
      }

      const { data, error } = await withTimeout(q, QUERY_TIMEOUT_MS, 'pet_qa_keywords query');
      return { data, error };
    };

    let { data, error } = await queryFor(language);
    let usedFallback = false;

    // EN fallback only on first batch (afterId === null) so paging stays consistent.
    if (!error && !afterId && (!data || data.length === 0) && language !== 'en') {
      const fb = await queryFor('en');
      if (!fb.error && fb.data && fb.data.length > 0) {
        data = fb.data;
        usedFallback = true;
      }
    }

    if (error) {
      console.error('get-state-qa-list error:', error);
      return new Response(
        JSON.stringify({ error: (error as Error).message ?? 'query failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const rows = data ?? [];
    const nextCursor = rows.length === limit ? rows[rows.length - 1].id : null;

    return new Response(
      JSON.stringify({
        data: rows,
        nextCursor,
        isFallback: usedFallback,
        language: usedFallback ? 'en' : language,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('get-state-qa-list exception:', err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
