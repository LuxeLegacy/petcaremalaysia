-- Table for storing Q&A keywords and answers for AI matching
CREATE TABLE public.pet_qa_keywords (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  city_slug TEXT,
  state TEXT,
  category TEXT NOT NULL,
  language TEXT DEFAULT 'en',
  priority INT DEFAULT 0,
  view_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.pet_qa_keywords ENABLE ROW LEVEL SECURITY;

-- Public read access for Q&A content
CREATE POLICY "Public read access for pet QA" 
ON public.pet_qa_keywords 
FOR SELECT 
USING (true);

-- Create indexes for search performance
CREATE INDEX idx_pet_qa_keywords_keyword ON public.pet_qa_keywords USING gin(to_tsvector('english', keyword));
CREATE INDEX idx_pet_qa_keywords_city ON public.pet_qa_keywords(city_slug);
CREATE INDEX idx_pet_qa_keywords_state ON public.pet_qa_keywords(state);
CREATE INDEX idx_pet_qa_keywords_category ON public.pet_qa_keywords(category);
CREATE INDEX idx_pet_qa_keywords_language ON public.pet_qa_keywords(language);

-- Trigger for updated_at
CREATE TRIGGER update_pet_qa_keywords_updated_at
BEFORE UPDATE ON public.pet_qa_keywords
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();