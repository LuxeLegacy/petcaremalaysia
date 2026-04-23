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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const stateSlug: string = (body.stateSlug || '').toString();
    const language: string = (body.language || 'en').toString();
    const limit: number = Math.min(Math.max(parseInt(body.limit ?? '500', 10) || 500, 1), 1000);
    const offset: number = Math.max(parseInt(body.offset ?? '0', 10) || 0, 0);

    if (!stateSlug) {
      return new Response(
        JSON.stringify({ error: 'stateSlug is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const stateCandidates = STATE_NAME_MAP[stateSlug] || [stateSlug];

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      { auth: { persistSession: false } }
    );

    const queryFor = async (lang: string) => {
      const { data, error, count } = await supabase
        .from('pet_qa_keywords')
        .select('id, keyword, question, category, priority, city_slug', { count: 'exact' })
        .in('state', stateCandidates)
        .eq('language', lang)
        .order('priority', { ascending: false })
        .range(offset, offset + limit - 1);
      return { data, error, count };
    };

    let { data, error, count } = await queryFor(language);
    let usedFallback = false;

    if (!error && (!data || data.length === 0) && language !== 'en') {
      const fb = await queryFor('en');
      if (!fb.error && fb.data && fb.data.length > 0) {
        data = fb.data;
        count = fb.count;
        usedFallback = true;
      }
    }

    if (error) {
      console.error('get-state-qa-list error:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        data: data || [],
        total: count ?? (data?.length || 0),
        isFallback: usedFallback,
        language: usedFallback ? 'en' : language,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('get-state-qa-list exception:', err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
