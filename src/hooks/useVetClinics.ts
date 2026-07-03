import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface VetClinic {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string | null;
  email: string | null;
  services: string[] | null;
  rating: number | null;
  review_count: number | null;
  is_24_hours: boolean | null;
  is_emergency: boolean | null;
  website: string | null;
  image_url: string | null;
}

// Race the Supabase query against a hard timeout so a slow / 503-ing Data API
// can't leave the results page spinning indefinitely.
const withTimeout = <T,>(promise: PromiseLike<T>, ms: number): Promise<T> =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`vet_clinics request timed out after ${ms}ms`)),
      ms,
    );
    Promise.resolve(promise).then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      },
    );
  });

export const useVetClinics = (city: string, state: string) => {
  return useQuery({
    queryKey: ['vet-clinics', city, state],
    queryFn: async () => {
      const { data, error } = await withTimeout(
        supabase
          .from('vet_clinics')
          .select('*')
          .ilike('city', city)
          .ilike('state', state)
          .order('rating', { ascending: false, nullsFirst: false }),
        8000,
      );

      if (error) throw error;
      return data as VetClinic[];
    },
    // Fail fast instead of retrying for ~90s if the Data API is unreachable.
    retry: 1,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
