-- Migration 002: Seed Data for Portfolio
-- Real Projects: POS-GA, ShopTheThao, NoCoffe

-- 1. Insert/Update Technologies
INSERT INTO public.technologies (id, name, category, icon) VALUES
    ('react', 'React 19', 'web', 'react'),
    ('typescript', 'TypeScript', 'languages', 'typescript'),
    ('javascript', 'JavaScript', 'languages', 'javascript'),
    ('tailwind', 'Tailwind CSS', 'web', 'tailwind'),
    ('bootstrap', 'Bootstrap 5', 'web', 'bootstrap'),
    ('php', 'PHP 8.2', 'languages', 'php'),
    ('nodejs', 'Node.js', 'backend', 'nodejs'),
    ('express', 'Express.js', 'backend', 'express'),
    ('docker', 'Docker', 'backend', 'docker'),
    ('supabase', 'Supabase / PostgreSQL', 'databases', 'supabase'),
    ('mysql', 'MySQL / PDO', 'databases', 'mysql'),
    ('mongodb', 'MongoDB / Mongoose', 'databases', 'mongodb'),
    ('sqlserver', 'SQL Server', 'databases', 'sqlserver'),
    ('csharp', 'C#', 'languages', 'csharp'),
    ('winforms', 'C# WinForms', 'dotnet', 'windows'),
    ('adonet', 'ADO.NET', 'dotnet', 'database')
ON CONFLICT (id) DO UPDATE SET 
    name = EXCLUDED.name,
    category = EXCLUDED.category,
    icon = EXCLUDED.icon;

-- 2. Clear previous demo projects and insert 3 real projects
DELETE FROM public.project_technologies WHERE project_id IN (
    '11111111-1111-1111-1111-111111111111',
    '22222222-2222-2222-2222-222222222222',
    '33333333-3333-3333-3333-333333333333',
    '44444444-4444-4444-4444-444444444444',
    '55555555-5555-5555-5555-555555555555',
    '66666666-6666-6666-6666-666666666666'
);

DELETE FROM public.projects WHERE id IN (
    '11111111-1111-1111-1111-111111111111',
    '22222222-2222-2222-2222-222222222222',
    '33333333-3333-3333-3333-333333333333',
    '44444444-4444-4444-4444-444444444444',
    '55555555-5555-5555-5555-555555555555',
    '66666666-6666-6666-6666-666666666666'
);

INSERT INTO public.projects (id, slug, title, description, long_description, category, thumbnail, github_url, demo_url, featured, display_order) VALUES
(
    'a1111111-1111-1111-1111-111111111111',
    'pos-ga',
    'POS-GA - POS Kinh Doanh Gà Thịt',
    'Xây dựng end-to-end POS phục vụ mô hình kinh doanh gà thịt: tính tiền theo kg/số con, ghi nợ, VietQR động, quản lý đàn gà và đối tác.',
    'Hệ thống Point of Sale (POS) toàn diện phục vụ kinh doanh gia cầm. Dự án độc lập phụ trách trọn gói từ thiết kế giao diện, logic nghiệp vụ đến thiết kế schema Supabase/PostgreSQL và tích hợp thanh toán VietQR động, dashboard theo dõi doanh thu - lợi nhuận - chi phí.',
    'Web',
    '/assets/projects/project-supabase.svg',
    'https://github.com/doubleD1302/POS-GA',
    NULL,
    TRUE,
    1
),
(
    'b2222222-2222-2222-2222-222222222222',
    'shop-the-thao',
    'ShopTheThao - E-Commerce Platform',
    'Web thương mại điện tử thể thao xây dựng trên nền PHP 8.2, kiến trúc Custom MVC, MySQL/PDO, Bootstrap 5 và môi trường Docker/Apache.',
    'Dự án thương mại điện tử chuyên đồ thể thao theo mô hình Custom MVC không phụ thuộc framework. Đảm nhiệm các phân hệ cốt lõi: Voucher/Khuyến mãi, hệ thống gửi email thông báo tự động khi có hàng, tin tức và quản trị bài viết (News/Admin News), cùng thiết lập môi trường Docker/Apache và xử lý lỗi deploy Linux.',
    'Web',
    '/assets/projects/project-web.svg',
    'https://github.com/ducbaotaplaptrinh/ShopTheThao',
    NULL,
    TRUE,
    2
),
(
    'c3333333-3333-3333-3333-333333333333',
    'no-coffe',
    'NoCoffe - POS Quán Cà Phê',
    'Hệ thống POS bán hàng quán cà phê: giao diện SPA mượt mà, quản lý kho nguyên liệu, hao hụt và hỗ trợ thao tác offline với IndexedDB/LocalStorage.',
    'Phần mềm quản lý bán hàng và vận hành quán cà phê hiện đại. Dự án đảm nhiệm vai trò Project Lead: thiết kế Single Page Application (SPA) tốc độ cao, backend REST API bằng Node.js và Express.js, cơ sở dữ liệu MongoDB/Mongoose cùng cơ chế lưu trữ IndexedDB/LocalStorage giúp duy trì luồng thao tác cốt lõi khi mất kết nối mạng.',
    'Web',
    '/assets/projects/project-tidb.svg',
    'https://github.com/doubleD1302/NoCoffe',
    NULL,
    TRUE,
    3
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    long_description = EXCLUDED.long_description,
    category = EXCLUDED.category,
    github_url = EXCLUDED.github_url;

-- 3. Map project technologies
INSERT INTO public.project_technologies (project_id, technology_id) VALUES
    ('a1111111-1111-1111-1111-111111111111', 'react'),
    ('a1111111-1111-1111-1111-111111111111', 'typescript'),
    ('a1111111-1111-1111-1111-111111111111', 'tailwind'),
    ('a1111111-1111-1111-1111-111111111111', 'supabase'),

    ('b2222222-2222-2222-2222-222222222222', 'php'),
    ('b2222222-2222-2222-2222-222222222222', 'mysql'),
    ('b2222222-2222-2222-2222-222222222222', 'bootstrap'),
    ('b2222222-2222-2222-2222-222222222222', 'docker'),

    ('c3333333-3333-3333-3333-333333333333', 'javascript'),
    ('c3333333-3333-3333-3333-333333333333', 'nodejs'),
    ('c3333333-3333-3333-3333-333333333333', 'express'),
    ('c3333333-3333-3333-3333-333333333333', 'mongodb')
ON CONFLICT DO NOTHING;
