-- ==============================================================================
-- Supabase Migration: 002_seed_data.sql
-- Description: Seed data for Technologies and Projects
-- ==============================================================================

-- 1. Insert Technologies
INSERT INTO public.technologies (id, name, category, icon) VALUES
    ('csharp', 'C#', 'languages', 'csharp'),
    ('java', 'Java', 'languages', 'java'),
    ('cpp', 'C++', 'languages', 'cpp'),
    ('typescript', 'TypeScript', 'languages', 'typescript'),
    ('javascript', 'JavaScript', 'languages', 'javascript'),
    ('php', 'PHP', 'languages', 'php'),
    ('sql', 'SQL', 'languages', 'sql'),
    ('html5', 'HTML5', 'web', 'html5'),
    ('css3', 'CSS3', 'web', 'css3'),
    ('bootstrap', 'Bootstrap 5', 'web', 'bootstrap'),
    ('winforms', 'C# WinForms', 'dotnet', 'windows'),
    ('adonet', 'ADO.NET', 'dotnet', 'database'),
    ('sqlserver', 'SQL Server', 'databases', 'sqlserver'),
    ('mysql', 'MySQL', 'databases', 'mysql'),
    ('tidb', 'TiDB Cloud', 'databases', 'tidb'),
    ('supabase', 'Supabase', 'databases', 'supabase'),
    ('firebase', 'Firebase', 'backend', 'firebase')
ON CONFLICT (id) DO UPDATE SET 
    name = EXCLUDED.name,
    category = EXCLUDED.category,
    icon = EXCLUDED.icon;

-- 2. Insert Projects
INSERT INTO public.projects (id, slug, title, description, long_description, category, thumbnail, github_url, demo_url, featured, display_order) VALUES
(
    '11111111-1111-1111-1111-111111111111',
    'enterprise-management-system',
    'Enterprise Resource & Inventory Management System',
    'Multi-tier desktop management application designed with layered architecture, strong transaction integrity, and relational data access.',
    'A robust enterprise desktop application engineered with C# WinForms and ADO.NET, interacting directly with Microsoft SQL Server. Implements a strict 3-tier architecture (Presentation Layer -> Business Logic Layer -> Data Access Layer) with stored procedures, parameter-driven commands, and ACID-compliant transaction boundaries to prevent deadlock and race conditions.',
    'Desktop',
    '/assets/projects/project-winforms.svg',
    'https://github.com/[YOUR_GITHUB]/enterprise-management-system',
    NULL,
    TRUE,
    1
),
(
    '22222222-2222-2222-2222-222222222222',
    'fullstack-ecommerce-platform',
    'High-Performance Modular E-Commerce Platform',
    'Full-stack dynamic web portal featuring a clean PHP backend, MySQL relational modeling, responsive Bootstrap frontend, and TypeScript interactions.',
    'A modular web application separating view orchestration from backend REST endpoints. The PHP backend utilizes PDO with strictly prepared statements for SQL injection immunity. The data model in MySQL is normalized to 3NF with cascading constraints and indexing on foreign keys. The frontend combines semantic HTML5, Bootstrap 5 grid utilities, and TypeScript for responsive cart manipulation.',
    'Web',
    '/assets/projects/project-web.svg',
    'https://github.com/[YOUR_GITHUB]/fullstack-ecommerce-platform',
    'https://demo-ecommerce.example.com',
    TRUE,
    2
),
(
    '33333333-3333-3333-3333-333333333333',
    'cloud-data-hub',
    'Cloud Data Hub & Realtime Operational Dashboard',
    'Cloud-native data operations interface powered by Supabase PostgreSQL, strict TypeScript models, and real-time database change streams.',
    'A modern cloud database dashboard connected to Supabase PostgreSQL. Implements Row Level Security (RLS) policies to govern multi-tenant data access at the database level. Utilizes Supabase Realtime WebSocket subscriptions for immediate UI synchronization upon record mutations without polling, accompanied by strongly typed TypeScript schema contracts.',
    'Database',
    '/assets/projects/project-supabase.svg',
    'https://github.com/[YOUR_GITHUB]/cloud-data-hub',
    'https://cloud-data-hub.example.com',
    TRUE,
    3
),
(
    '44444444-4444-4444-4444-444444444444',
    'distributed-sql-analytics',
    'TiDB Cloud Distributed SQL Analytical Engine',
    'Scalable distributed SQL exploration analyzing partitioned telemetry datasets on TiDB Cloud with MySQL protocol compatibility.',
    'An analytical project evaluating horizontal scalability and HTAP (Hybrid Transactional/Analytical Processing) using TiDB Cloud. Benchmarks distributed SQL query performance across sharded tables, leveraging TiKV storage engines, distributed JOIN algorithms, and cloud connection pooling.',
    'Database',
    '/assets/projects/project-tidb.svg',
    'https://github.com/[YOUR_GITHUB]/distributed-sql-analytics',
    NULL,
    FALSE,
    4
),
(
    '55555555-5555-5555-5555-555555555555',
    'realtime-collaboration-workspace',
    'Real-time Collaborative Workspace & Sync Engine',
    'Cloud-connected interactive web application leveraging Firebase NoSQL Firestore and authentication for instant bi-directional collaboration.',
    'An interactive real-time canvas and task sync application built with JavaScript and Firebase. Leverages Firestore snapshot listeners for zero-latency client state synchronization, offline cache persistence, and Firebase Authentication with security rules ensuring strict document-level authorization.',
    'Web',
    '/assets/projects/project-firebase.svg',
    'https://github.com/[YOUR_GITHUB]/realtime-collaboration-workspace',
    'https://collab-workspace.example.com',
    FALSE,
    5
),
(
    '66666666-6666-6666-6666-666666666666',
    'high-throughput-data-service',
    'High-Throughput Enterprise Batch Processor & Service',
    'Robust enterprise backend service built with Java and SQL, utilizing multi-threaded worker pools and optimized JDBC batching.',
    'A core backend processing engine developed in Java, engineered for high-throughput batch ETL workflows. Features connection pooling (HikariCP), JDBC batch updates (`executeBatch`), thread-safe worker pools (`ExecutorService`), and defensive exception management with rollback guarantees.',
    'Backend',
    '/assets/projects/project-java.svg',
    'https://github.com/[YOUR_GITHUB]/high-throughput-data-service',
    NULL,
    FALSE,
    6
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    long_description = EXCLUDED.long_description,
    category = EXCLUDED.category;

-- 3. Link Projects to Technologies
INSERT INTO public.project_technologies (project_id, technology_id) VALUES
    -- Project 1: Enterprise Management System
    ('11111111-1111-1111-1111-111111111111', 'csharp'),
    ('11111111-1111-1111-1111-111111111111', 'winforms'),
    ('11111111-1111-1111-1111-111111111111', 'adonet'),
    ('11111111-1111-1111-1111-111111111111', 'sqlserver'),
    ('11111111-1111-1111-1111-111111111111', 'sql'),
    
    -- Project 2: Full-stack E-Commerce
    ('22222222-2222-2222-2222-222222222222', 'php'),
    ('22222222-2222-2222-2222-222222222222', 'mysql'),
    ('22222222-2222-2222-2222-222222222222', 'html5'),
    ('22222222-2222-2222-2222-222222222222', 'css3'),
    ('22222222-2222-2222-2222-222222222222', 'bootstrap'),
    ('22222222-2222-2222-2222-222222222222', 'typescript'),
    ('22222222-2222-2222-2222-222222222222', 'sql'),

    -- Project 3: Cloud Data Hub
    ('33333333-3333-3333-3333-333333333333', 'typescript'),
    ('33333333-3333-3333-3333-333333333333', 'supabase'),
    ('33333333-3333-3333-3333-333333333333', 'sql'),
    ('33333333-3333-3333-3333-333333333333', 'html5'),
    ('33333333-3333-3333-3333-333333333333', 'css3'),

    -- Project 4: Distributed SQL Analytics
    ('44444444-4444-4444-4444-444444444444', 'tidb'),
    ('44444444-4444-4444-4444-444444444444', 'sql'),
    ('44444444-4444-4444-4444-444444444444', 'typescript'),

    -- Project 5: Realtime Workspace
    ('55555555-5555-5555-5555-555555555555', 'javascript'),
    ('55555555-5555-5555-5555-555555555555', 'firebase'),
    ('55555555-5555-5555-5555-555555555555', 'html5'),
    ('55555555-5555-5555-5555-555555555555', 'css3'),

    -- Project 6: High Throughput Service
    ('66666666-6666-6666-6666-666666666666', 'java'),
    ('66666666-6666-6666-6666-666666666666', 'sql')
ON CONFLICT DO NOTHING;
