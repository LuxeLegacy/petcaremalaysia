-- Create assessment_leads table for lead capture
CREATE TABLE public.assessment_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Contact Info
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_phone TEXT,
  pet_name TEXT NOT NULL,
  
  -- Location
  zipcode TEXT,
  city TEXT,
  state TEXT,
  
  -- Assessment Data (JSON)
  assessment_data JSONB,
  
  -- Results
  urgency_level TEXT,
  urgency_score INTEGER
);

-- Enable RLS
ALTER TABLE public.assessment_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (lead capture - public form)
CREATE POLICY "Allow anonymous inserts" ON public.assessment_leads
  FOR INSERT TO anon WITH CHECK (true);

-- Create index on created_at for reporting
CREATE INDEX idx_assessment_leads_created_at ON public.assessment_leads(created_at DESC);

-- Create index on urgency_level for filtering
CREATE INDEX idx_assessment_leads_urgency ON public.assessment_leads(urgency_level);