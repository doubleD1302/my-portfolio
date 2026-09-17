import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'pos-ga',
    slug: 'pos-ga',
    title: 'POS-GA - POS Kinh Doanh Gà Thịt',
    description: 'Xây dựng end-to-end POS phục vụ mô hình kinh doanh gà thịt: tính tiền theo kg/số con, ghi nợ, VietQR động, quản lý đàn gà và đối tác.',
    longDescription: 'Hệ thống Point of Sale (POS) toàn diện phục vụ kinh doanh gia cầm. Dự án độc lập phụ trách trọn gói từ thiết kế giao diện, logic nghiệp vụ đến thiết kế schema Supabase/PostgreSQL và tích hợp thanh toán VietQR động, dashboard theo dõi doanh thu - lợi nhuận - chi phí.',
    category: 'Web',
    technologies: [
      { id: 'react', name: 'React 19', category: 'web', icon: 'react' },
      { id: 'typescript', name: 'TypeScript', category: 'languages', icon: 'typescript' },
      { id: 'tailwind', name: 'Tailwind CSS', category: 'web', icon: 'tailwind' },
      { id: 'supabase', name: 'Supabase / PostgreSQL', category: 'databases', icon: 'supabase' }
    ],
    thumbnail: '/assets/projects/project-supabase.svg',
    githubUrl: 'https://github.com/doubleD1302/POS-GA',
    demoUrl: undefined,
    featured: true,
    architecture: {
      client: 'React 19 SPA (Tailwind CSS, Recharts & Lucide Icons)',
      application: 'Client-side Business Logic, Price Calculator & VietQR Engine',
      dataLayer: 'Supabase JavaScript Client with Row-Level Security',
      database: 'PostgreSQL on Supabase (Schema cho đàn gà, đơn hàng & công nợ)',
      diagramSteps: [
        'Người dùng nhập khối lượng (kg) và số con -> React 19 tính thành tiền',
        'Tự động sinh mã VietQR động theo đúng tổng tiền và nội dung đơn hàng',
        'Ghi nhận giao dịch vào Supabase PostgreSQL với trạng thái tiền mặt/ghi nợ',
        'Cập nhật tồn đàn gà và công nợ đối tác theo thời gian thực',
        'Recharts đồng bộ dashboard doanh thu - lợi nhuận - chi phí'
      ]
    },
    caseStudy: {
      overview: 'Xây dựng end-to-end phần mềm POS độc lập dành cho hộ kinh doanh và đại lý phân phối gà thịt, tối ưu hóa quá trình xuất bán, quản lý công nợ và trực quan hóa doanh thu.',
      problem: 'Kinh doanh gia cầm có đặc thù giao dịch kép (vừa tính theo số con, vừa tính theo tổng trọng lượng kg), thường xuyên phát sinh công nợ gối đầu và cần tạo mã VietQR chuyển khoản nhanh tại chỗ.',
      solution: 'Phát triển hệ thống web POS bằng React 19 và Supabase/PostgreSQL. Hỗ trợ cân đo linh hoạt, tích hợp chuẩn VietQR động theo đơn, tự động quản lý sổ nợ khách hàng và thống kê tài chính.',
      myRole: 'Independent Developer (Dự án độc lập) — Tự phụ trách toàn bộ từ thiết kế UI/UX, viết logic nghiệp vụ, thiết kế schema cơ sở dữ liệu PostgreSQL trên Supabase đến tích hợp VietQR.',
      systemArchitecture: 'Frontend xây dựng trên nền React 19 và TypeScript, áp dụng Tailwind CSS cho giao diện bán hàng nhanh. Tầng dữ liệu kết nối trực tiếp đến Supabase PostgreSQL thông qua Supabase Client có bảo mật RLS.',
      databaseDesign: 'Schema quan hệ chuẩn hóa trên PostgreSQL gồm các bảng: orders, order_items, flocks (đàn gà), partners (đối tác/khách hàng), debts (sổ nợ) và expenses (chi phí vận hành).',
      keyFeatures: [
        'Tính tiền linh hoạt theo cân nặng (kg) và số lượng (con) với độ chính xác cao',
        'Quản lý sổ nợ đối tác và khách mua sỉ với lịch sử thanh toán chi tiết',
        'Sinh mã thanh toán VietQR động theo từng hóa đơn giúp khách quét mã trả tiền ngay',
        'Quản lý đàn gà, nhập kho, xuất bán và theo dõi tỷ lệ hao hụt',
        'Dashboard trực quan hóa doanh thu, lợi nhuận thuần và chi phí với Recharts'
      ],
      challenges: [
        'Xử lý làm tròn số thập phân của trọng lượng cân và tính toán tiền nợ: Tạo bộ quy chuẩn tính toán tài chính và ràng buộc kiểu DECIMAL chặt chẽ trong database.',
        'Đảm bảo tốc độ sinh mã QR không phụ thuộc mạng: Ứng dụng thuật toán sinh chuỗi thanh toán chuẩn Napas VietQR trực tiếp tại client.'
      ],
      whatILearned: [
        'Kinh nghiệm hoàn thiện sản phẩm độc lập từ yêu cầu thực tế của người dùng kinh doanh.',
        'Làm chủ React 19 và Supabase/PostgreSQL trong bài toán quản lý tài chính và công nợ.'
      ]
    }
  },
  {
    id: 'shop-the-thao',
    slug: 'shop-the-thao',
    title: 'ShopTheThao - E-Commerce Platform',
    description: 'Web thương mại điện tử thể thao xây dựng trên nền PHP 8.2, kiến trúc Custom MVC, MySQL/PDO, Bootstrap 5 và môi trường Docker/Apache.',
    longDescription: 'Dự án thương mại điện tử chuyên đồ thể thao theo mô hình Custom MVC không phụ thuộc framework. Đảm nhiệm các phân hệ cốt lõi: Voucher/Khuyến mãi, hệ thống gửi email thông báo tự động khi có hàng, tin tức và quản trị bài viết (News/Admin News), cùng thiết lập môi trường Docker/Apache và xử lý lỗi deploy Linux.',
    category: 'Web',
    technologies: [
      { id: 'php', name: 'PHP 8.2', category: 'languages', icon: 'php' },
      { id: 'mysql', name: 'MySQL / PDO', category: 'databases', icon: 'mysql' },
      { id: 'bootstrap', name: 'Bootstrap 5', category: 'web', icon: 'bootstrap' },
      { id: 'docker', name: 'Docker', category: 'backend', icon: 'docker' }
    ],
    thumbnail: '/assets/projects/project-web.svg',
    githubUrl: 'https://github.com/ducbaotaplaptrinh/ShopTheThao',
    demoUrl: undefined,
    featured: true,
    architecture: {
      client: 'Responsive Bootstrap 5 UI, Modern HTML5 & JavaScript Fetch',
      application: 'Custom PHP 8.2 MVC Architecture (Router, Controllers & Services)',
      dataLayer: 'PHP Data Objects (PDO) with Prepared Statements',
      database: 'MySQL Relational Schema (3NF Normalized with Foreign Key Constraints)',
      diagramSteps: [
        'HTTP Request gửi đến Apache -> Điều hướng tập trung qua index.php router',
        'Router phân giải URL và kích hoạt Controller tương ứng (Voucher, News, Mailer)',
        'Controller gọi Model thông qua PDO với tham số Prepared Statements an toàn',
        'MySQL thực thi truy vấn và trả về dữ liệu quan hệ được ánh xạ vào View',
        'Hệ thống SMTP kích hoạt gửi mail thông báo khi sản phẩm hết hàng có hàng trở lại'
      ]
    },
    caseStudy: {
      overview: 'Nền tảng thương mại điện tử kinh doanh trang phục và dụng cụ thể thao trực tuyến, xây dựng theo kiến trúc Custom MVC hướng đối tượng trên nền PHP 8.2 và MySQL.',
      problem: 'Cần xây dựng một hệ thống bán hàng đa tính năng, hoạt động nhẹ và ổn định mà không sử dụng các framework nặng như Laravel để nắm vững bản chất kiến trúc MVC và vòng đời request/response.',
      solution: 'Thiết kế khung Custom MVC thuần bằng PHP 8.2, sử dụng MySQL và PDO. Tôi phụ trách trực tiếp các module Voucher, Email thông báo sản phẩm và hệ thống Tin tức, đồng thời đóng gói dự án qua Docker.',
      myRole: 'Backend Developer (Team Project) — Phụ trách module Voucher/CRUD, dịch vụ gửi email thông báo có hàng, hệ thống News/Admin News, kết nối MySQL/PDO và xử lý lỗi deploy Docker trên Linux.',
      systemArchitecture: 'Kiến trúc MVC tùy chỉnh: Tầng Controller tiếp nhận request từ router tập trung, kiểm tra phân quyền người dùng, tương tác với Model để xử lý nghiệp vụ và nạp dữ liệu ra View template.',
      databaseDesign: 'Cơ sở dữ liệu quan hệ MySQL chuẩn 3NF: Bảng vouchers với điều kiện áp dụng, bảng stock_notifications lưu email khách chờ hàng, bảng news / categories cùng các bảng sản phẩm và đơn hàng.',
      keyFeatures: [
        'Module Voucher / Mã giảm giá đầy đủ CRUD, thiết lập hạn sử dụng và số lượt áp dụng',
        'Tính năng thông báo có hàng: Khách hàng đăng ký nhận email tự động khi sản phẩm nhập thêm kho',
        'Phân hệ tin tức (News & Admin News) phục vụ truyền thông và bài viết khuyến mãi',
        'Truy vấn cơ sở dữ liệu an toàn qua PDO Prepared Statements chống triệt để SQL Injection',
        'Đóng gói Dockerfile & docker-compose chạy môi trường LAMP đồng nhất giữa các thành viên'
      ],
      challenges: [
        'Xử lý lỗi phân giải router và HTTP headers khi đưa dự án lên server Linux: Cấu hình lại rewrite rules trong file .htaccess và kiểm soát output buffering (ob_start).',
        'Cơ chế gửi email tự động không làm nghẽn luồng xử lý của khách hàng: Tách biệt logic kiểm tra kho và kích hoạt gửi mail bất đồng bộ.'
      ],
      whatILearned: [
        'Hiểu tường tận kiến trúc MVC, xử lý session, routing và PDO trong PHP hướng đối tượng.',
        'Thực hành đóng gói và triển khai ứng dụng thực tế với Docker trên hệ điều hành Linux.'
      ]
    }
  },
  {
    id: 'no-coffe',
    slug: 'no-coffe',
    title: 'NoCoffe - POS Quán Cà Phê',
    description: 'Hệ thống POS bán hàng quán cà phê: giao diện SPA mượt mà, quản lý kho nguyên liệu, hao hụt và hỗ trợ thao tác offline với IndexedDB/LocalStorage.',
    longDescription: 'Phần mềm quản lý bán hàng và vận hành quán cà phê hiện đại. Dự án đảm nhiệm vai trò Project Lead: thiết kế Single Page Application (SPA) tốc độ cao, backend REST API bằng Node.js và Express.js, cơ sở dữ liệu MongoDB/Mongoose cùng cơ chế lưu trữ IndexedDB/LocalStorage giúp duy trì luồng thao tác cốt lõi khi mất kết nối mạng.',
    category: 'Web',
    technologies: [
      { id: 'javascript', name: 'JavaScript SPA', category: 'languages', icon: 'javascript' },
      { id: 'nodejs', name: 'Node.js', category: 'backend', icon: 'nodejs' },
      { id: 'express', name: 'Express.js', category: 'backend', icon: 'express' },
      { id: 'mongodb', name: 'MongoDB / Mongoose', category: 'databases', icon: 'mongodb' }
    ],
    thumbnail: '/assets/projects/project-tidb.svg',
    githubUrl: 'https://github.com/doubleD1302/NoCoffe',
    demoUrl: undefined,
    featured: true,
    architecture: {
      client: 'High-speed JavaScript SPA (Responsive Cashier Interface)',
      application: 'Node.js & Express.js REST API with Modular Route Handlers',
      dataLayer: 'Browser IndexedDB & LocalStorage Client Cache / Mongoose ODM',
      database: 'MongoDB Document Database (Menu, Ingredients, Shifts & Orders)',
      diagramSteps: [
        'Thu ngân tạo đơn cà phê/topping trên giao diện SPA',
        'Đơn hàng được lưu tức thì vào IndexedDB/LocalStorage tại máy trạm',
        'Ứng dụng đồng bộ hóa bất đồng bộ với backend Node.js/Express qua REST API',
        'Mongoose thực thi cập nhật trừ tồn kho nguyên liệu và chốt doanh thu ca',
        'Nếu mạng chập chờn, đơn hàng xếp hàng đợi trong local storage và tự đồng bộ lại khi online'
      ]
    },
    caseStudy: {
      overview: 'Hệ thống POS chuyên dụng cho mô hình quán cà phê và thức uống F&B, tập trung vào tốc độ order nhanh tại quầy, quản lý menu biến động và kiểm soát tồn kho nguyên liệu.',
      problem: 'Vào giờ cao điểm, mạng internet tại quán cà phê thường không ổn định gây đứng màn hình bán hàng, thu ngân không thể bấm món, dẫn đến trải nghiệm khách hàng kém và thất thoát định lượng nguyên liệu.',
      solution: 'Thiết kế SPA với cơ chế offline-first: lưu trữ tạm thời trên IndexedDB và LocalStorage, giúp thu ngân order liên tục không gián đoạn. Kết nối backend Node.js/Express và MongoDB để quản lý tập trung.',
      myRole: 'Project Lead — Định hình kiến trúc tổng thể, thiết kế RESTful API với Express.js, mô hình hóa dữ liệu MongoDB/Mongoose, và xây dựng cơ chế đệm dữ liệu offline trên trình duyệt.',
      systemArchitecture: 'Giao diện Single Page Application thuần JavaScript tối ưu hiệu năng. Backend Node.js/Express cung cấp các API quản trị món, kho và báo cáo ca. Cơ chế đồng bộ dữ liệu đệm hai chiều giữa IndexedDB và MongoDB.',
      databaseDesign: 'Mô hình tài liệu NoSQL MongoDB: Collection products (kèm mảng toppings), ingredients (nguyên liệu thô), recipes (công thức pha chế), orders (chi tiết đơn) và shifts (báo cáo doanh thu theo ca).',
      keyFeatures: [
        'Giao diện order SPA phản hồi tức thì, hỗ trợ tùy chỉnh size, lượng đường đá và topping',
        'Quản lý menu, công thức pha chế và tự động trừ hao nguyên liệu tương ứng khi bán',
        'Báo cáo doanh thu, chi phí và hao hụt theo từng ca làm việc hoặc theo ngày',
        'Cơ chế Offline-first với IndexedDB / LocalStorage giữ luồng thao tác khi mạng ngắt quãng',
        'Quản lý danh sách nhân viên thu ngân và phân quyền thao tác'
      ],
      challenges: [
        'Đồng bộ đơn hàng tạo trong lúc mất mạng mà không làm sai lệch tồn kho: Thiết kế cơ chế sync queue với timestamp và kiểm tra version trước khi trừ nguyên liệu trên MongoDB.',
        'Tối ưu tốc độ tải danh mục thức uống trên các thiết bị máy POS cảm ứng cấu hình khiêm tốn: Tối ưu DOM rendering và lưu cache menu tại client.'
      ],
      whatILearned: [
        'Kỹ thuật xây dựng ứng dụng web có khả năng chống chịu sự cố kết nối (network resilience).',
        'Tư duy thiết kế cơ sở dữ liệu NoSQL MongoDB cho các nghiệp vụ kiểm kê kho và bán hàng.'
      ]
    }
  }
];

export const getAllProjects = (): Project[] => projectsData;

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(p => p.slug === slug);
};
