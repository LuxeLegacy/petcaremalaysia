import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { VetClinic } from './useVetClinics';

export const useAllVetClinics = () => {
  return useQuery({
    queryKey: ['all-vet-clinics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vet_clinics')
        .select('*')
        .order('state', { ascending: true })
        .order('city', { ascending: true })
        .order('rating', { ascending: false, nullsFirst: false });

      if (error) throw error;
      return data as VetClinic[];
    },
  });
};
