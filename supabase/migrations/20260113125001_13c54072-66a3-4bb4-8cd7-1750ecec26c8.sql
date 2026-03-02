-- Fix function search path for update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

-- Update inquiries INSERT policy to be more restrictive (require at least name, phone, message)
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON public.inquiries;

CREATE POLICY "Anyone can submit inquiries"
ON public.inquiries
FOR INSERT
WITH CHECK (
    name IS NOT NULL AND 
    name != '' AND 
    phone IS NOT NULL AND 
    phone != '' AND
    message IS NOT NULL AND 
    message != ''
);