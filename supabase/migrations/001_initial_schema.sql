-- tao database cho portfolio

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- bang technologies
CREATE TABLE IF NOT EXISTS public.technologies (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    icon VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- bang projects
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    category VARCHAR(50) NOT NULL,
    thumbnail VARCHAR(255),
    github_url VARCHAR(255),
    demo_url VARCHAR(255),
    featured BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- bang trung gian project_technologies
CREATE TABLE IF NOT EXISTS public.project_technologies (
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    technology_id VARCHAR(50) NOT NULL REFERENCES public.technologies(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, technology_id)
);

-- bang luu tin nhan lien he
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'unread',
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- bang luu analytics
CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type VARCHAR(100) NOT NULL,
    page_path VARCHAR(255),
    metadata JSONB,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- tao index
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON public.projects(featured);
CREATE INDEX IF NOT EXISTS idx_technologies_category ON public.technologies(category);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

-- bat RLS
ALTER TABLE public.technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- policy doc public cho projects va tech
CREATE POLICY "Allow public read access on technologies"
    ON public.technologies FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Allow public read access on projects"
    ON public.projects FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Allow public read access on project_technologies"
    ON public.project_technologies FOR SELECT
    TO anon, authenticated
    USING (true);

-- ai cung co the gui contact message
CREATE POLICY "Allow public insert on contact_messages"
    ON public.contact_messages FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- ghi nhan analytics
CREATE POLICY "Allow public insert on analytics_events"
    ON public.analytics_events FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
