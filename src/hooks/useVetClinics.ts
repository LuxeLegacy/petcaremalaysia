import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface VetClinic {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string | null;
  services: string[] | null;
  rating: number | null;
  review_count: number | null;
  is_24_hours: boolean | null;
  is_emergency: boolean | null;
  website: string | null;
  image_url: string | null;
}

export const useVetClinics = (city: string, state: string) => {
  return useQuery({
    queryKey: ['vet-clinics', city, state],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vet_clinics')
        .select('*')
        .ilike('city', city)
        .ilike('state', state)
        .order('rating', { ascending: false, nullsFirst: false });

      if (error) throw error;
      return data as VetClinic[];
    },
  });
};
