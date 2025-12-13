-- Create vet clinics table
CREATE TABLE public.vet_clinics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  phone TEXT,
  services TEXT[] DEFAULT '{}',
  rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER DEFAULT 0,
  is_24_hours BOOLEAN DEFAULT false,
  is_emergency BOOLEAN DEFAULT false,
  website TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.vet_clinics ENABLE ROW LEVEL SECURITY;

-- Public read access (directory listings)
CREATE POLICY "Anyone can view vet clinics"
ON public.vet_clinics
FOR SELECT
USING (true);

-- Create index for city/state lookups
CREATE INDEX idx_vet_clinics_city_state ON public.vet_clinics(city, state);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger for automatic timestamp updates
CREATE TRIGGER update_vet_clinics_updated_at
BEFORE UPDATE ON public.vet_clinics
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();