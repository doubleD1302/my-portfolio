import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'pos-ga',
    slug: 'pos-ga',
    title: 'POS-GA - POS Kinh Doanh Gà Thịt',
    description: 'Xây dựng end-to-end POS phục vụ mô hình kinh doanh gà thịt: tính tiền theo kg/số con, ghi nợ, VietQR động, quản lý đàn gà và đối tác.',
    longDescription: 'Hệ thống Point of Sale (POS) toàn diện phục vụ kinh doanh gia cầm. Dự án độc lập phụ trách trọn gói từ thiết kế giao diện bán hàng nhanh, xử lý logic cân đo theo kg và số con, thiết kế schema Supabase/PostgreSQL, quản lý sổ nợ đối tác, tích hợp thanh toán VietQR động và dashboard doanh thu - chi phí.',
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
      client: 'React 19 SPA (TypeScript, Tailwind CSS, Recharts & Lucide Icons)',
      application: 'Client-side Business Logic, Price Calculator & VietQR Engine',
      dataLayer: 'Supabase JavaScript Client với Row-Level Security (RLS)',
      database: 'PostgreSQL trên nền tảng Supabase (Đơn hàng, đàn gà, sổ nợ đối tác)',
      diagramSteps: [
        'Người bán nhập khối lượng (kg) và số lượng (con) -> React 19 tính tiền tức thì theo đơn giá',
        'Tự động sinh mã VietQR động chứa chính xác số tiền và nội dung đơn để khách quét trả tiền tại quầy',
        'Lưu hóa đơn vào Supabase PostgreSQL với trạng thái Tiền mặt, Chuyển khoản hoặc Ghi nợ',
        'Nếu ghi nợ -> Tự động cập nhật công nợ vào sổ nợ đối tác và trừ tồn kho đàn gà',
        'Dashboard Recharts tổng hợp số liệu doanh thu, chi phí nhập gà và lợi nhuận thực tế'
      ]
    },
    caseStudy: {
      overview: 'Phần mềm POS độc lập được xây dựng để giải quyết bài toán giao dịch và quản lý thực tế cho mô hình kinh doanh gia cầm (gà thịt). Giúp người bán thao tác cân đo tính tiền nhanh chóng, theo dõi công nợ khách mua sỉ, quét mã QR chuyển khoản tức thì và trực quan hóa doanh thu - chi phí.',
      problem: 'Kinh doanh gia cầm có đặc thù giao dịch kép: Giá trị đơn hàng phụ thuộc đồng thời vào số con và tổng trọng lượng thực tế (kg) sau khi cân. Khách buôn sỉ và mối quen thường xuyên gối đầu công nợ, đòi hỏi phải có sổ theo dõi chi tiết từng đợt trả. Đồng thời, việc tính nhẩm thủ công và nhập số tiền chuyển khoản ngân hàng bằng tay dễ gây nhầm lẫn lúc đông khách.',
      solution: 'Phát triển ứng dụng web POS với React 19 và Supabase (PostgreSQL). Tích hợp bộ tính tiền linh hoạt (theo kg hoặc theo con, tự trừ trọng lượng lồng/bì), tạo chuỗi VietQR động ngay tại quầy cho khách quét mã, ghi chép sổ nợ đối tác chi tiết và trực quan hóa tài chính bằng biểu đồ Recharts.',
      myRole: 'Independent Developer (Dự án độc lập — 100% tự thực hiện): Trực tiếp khảo sát nghiệp vụ thực tế, thiết kế giao diện UI/UX bán hàng trực quan, lập trình toàn bộ logic tính tiền và công nợ, thiết kế schema PostgreSQL trên Supabase, tích hợp chuẩn tạo mã VietQR động và xây dựng dashboard tài chính.',
      systemArchitecture: 'Frontend xây dựng trên nền React 19 và TypeScript, áp dụng Tailwind CSS cho giao diện bán hàng tối ưu thao tác nhanh trên máy tính bảng/màn hình cảm ứng. Tầng dữ liệu kết nối trực tiếp đến Supabase PostgreSQL thông qua Supabase Client có cấu hình xác thực và Row-Level Security.',
      databaseDesign: 'Cơ sở dữ liệu PostgreSQL chuẩn hóa trên Supabase gồm các bảng: orders (đơn hàng), order_items (chi tiết số con, kg, giá), partners (đối tác & khách mua sỉ), debts (sổ nợ và lịch sử thanh toán nợ), flocks (quản lý đàn gà nhập - xuất - hao hụt) và expenses (chi phí vận hành).',
      keyFeatures: [
        'Màn hình bán hàng nhanh: Tính tiền linh hoạt theo cân nặng (kg) và số lượng (con), tự động trừ bì',
        'Tạo mã VietQR động: Sinh mã QR kèm chính xác số tiền và nội dung đơn giúp khách quét chuyển khoản ngay',
        'Quản lý sổ nợ đối tác: Theo dõi công nợ gối đầu của khách mua sỉ, ghi nhận lịch sử các đợt trả nợ dần',
        'Quản lý đàn gà: Theo dõi số lượng gà nhập vào theo từng đợt, số lượng xuất bán và tỷ lệ hao hụt',
        'Dashboard tài chính: Thống kê doanh thu, chi phí nhập gà và lợi nhuận thực tế theo ngày/tháng với Recharts'
      ],
      challenges: [
        'Xử lý làm tròn số thập phân của trọng lượng cân và tính toán tiền nợ: Trọng lượng cân lẻ nhân với đơn giá thường sinh số thập phân. Đã xây dựng hàm quy chuẩn làm tròn số tiền rõ ràng ở client và ràng buộc kiểu DECIMAL(12,2) chặt chẽ trong PostgreSQL để số liệu tài chính không bị lệch.',
        'Sinh mã VietQR tức thì không phụ thuộc API bên thứ ba: Để tránh việc mạng lag làm chậm thao tác quét mã, đã tích hợp thuật toán sinh chuỗi thanh toán chuẩn VietQR / Napas trực tiếp tại client để render mã SVG ngay lập tức.'
      ],
      whatILearned: [
        'Kinh nghiệm chuyển hóa một quy trình buôn bán thực tế ngoài đời sống (ghi sổ nợ tay, tính nhẩm cân gà) thành một sản phẩm phần mềm tiện lợi, tin cậy.',
        'Làm chủ React 19, TypeScript và khai thác hiệu quả giải pháp Backend-as-a-Service (Supabase / PostgreSQL) cho bài toán quản lý bán hàng.'
      ]
    }
  },
  {
    id: 'shop-the-thao',
    slug: 'shop-the-thao',
    title: 'ShopTheThao - E-Commerce Platform',
    description: 'Web thương mại điện tử thể thao xây dựng trên nền PHP 8.2, kiến trúc Custom MVC, MySQL/PDO, Bootstrap 5 và môi trường Docker/Apache.',
    longDescription: 'Dự án thương mại điện tử chuyên đồ thể thao theo mô hình Custom MVC không phụ thuộc framework nhằm nắm vững bản chất kiến trúc web. Đảm nhiệm các phân hệ cốt lõi: Voucher/Khuyến mãi, hệ thống gửi email thông báo tự động khi có hàng, tin tức và quản trị bài viết (News/Admin News), cùng thiết lập môi trường Docker/Apache và xử lý lỗi deploy Linux.',
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
      application: 'Custom PHP 8.2 MVC (Central Router, Controllers & Service Layer)',
      dataLayer: 'PHP Data Objects (PDO) với Prepared Statements',
      database: 'MySQL Relational Database trong môi trường Docker Container',
      diagramSteps: [
        'HTTP Request gửi đến Apache Web Server -> .htaccess điều hướng tập trung qua index.php',
        'Bộ định tuyến Router phân giải URL và kích hoạt Controller tương ứng (Voucher, News, Mailer)',
        'Controller gọi Model để truy vấn và xử lý dữ liệu qua PDO Prepared Statements an toàn',
        'Model trả dữ liệu về Controller, nạp dữ liệu vào View template để render HTML trả về trình duyệt',
        'Khi admin cập nhật kho sản phẩm hết hàng -> Kích hoạt gửi email thông báo tự động cho khách đăng ký'
      ]
    },
    caseStudy: {
      overview: 'Dự án nhóm 2 người xây dựng website thương mại điện tử chuyên kinh doanh quần áo và phụ kiện thể thao trực tuyến. Ứng dụng được phát triển bằng PHP 8.2 thuần theo mô hình kiến trúc MVC tự thiết kế (Custom MVC) kết nối MySQL qua PDO, đóng gói toàn bộ môi trường chạy bằng Docker.',
      problem: 'Mục tiêu của dự án là hiểu sâu bản chất kiến trúc MVC, xử lý session và vòng đời HTTP Request/Response mà không dựa vào các framework có sẵn như Laravel. Đồng thời giải quyết các bài toán kinh doanh e-commerce thực tế: kích thích mua hàng bằng hệ thống Voucher/Khuyến mãi linh hoạt, giữ chân khách hàng bằng cách thông báo tự động qua email khi sản phẩm hết hàng được nhập lại kho, và đảm bảo tính đồng nhất môi trường khi làm việc nhóm.',
      solution: 'Xây dựng khung Custom MVC hướng đối tượng trên PHP 8.2 và MySQL PDO. Tôi trực tiếp phụ trách phát triển module Voucher/Khuyến mãi (CRUD mã giảm giá, kiểm tra điều kiện áp dụng), dịch vụ gửi email thông báo có hàng (thongBaoCoHang), phân hệ Tin tức (News & Admin News), đóng gói môi trường Docker (Apache + PHP + MySQL) và giải quyết các lỗi triển khai trên máy chủ Linux.',
      myRole: 'Backend Developer & DevOps (Dự án nhóm 2 người — Nhánh ducdat): Thiết kế và lập trình module Voucher/Khuyến mãi, xây dựng tính năng gửi email thông báo có hàng, quản lý trang tin tức & quản trị bài viết Admin News, thiết lập Dockerfile/Docker Compose và xử lý lỗi rewrite URL, PDO trên môi trường Linux.',
      systemArchitecture: 'Kiến trúc Custom MVC hướng đối tượng: Request từ client được file .htaccess điều hướng về bộ định tuyến trung tâm router. Router xác định controller và action cần gọi, gọi model để thao tác với cơ sở dữ liệu qua PDO Prepared Statements, và render dữ liệu ra template view bằng Bootstrap 5.',
      databaseDesign: 'Cơ sở dữ liệu quan hệ MySQL chuẩn hóa gồm các bảng phụ trách chính: vouchers (mã giảm giá, loại giảm theo tiền/% , hạn sử dụng, số lượt dùng, điều kiện đơn tối thiểu), stock_notifications (email khách chờ hàng, sản phẩm tương ứng, trạng thái đã gửi), news & news_categories (danh mục và bài viết tin tức thể thao), kết nối với các bảng sản phẩm và đơn hàng.',
      keyFeatures: [
        'Module Voucher / Mã giảm giá: Quản trị viên tạo mã với nhiều điều kiện; khách hàng áp dụng mã vào đơn hàng và được khấu trừ tiền tự động',
        'Thông báo có hàng qua Email: Khách hàng đăng ký email khi sản phẩm hết hàng, hệ thống tự động gửi email thông báo khi kho được bổ sung',
        'Phân hệ Tin tức (News & Admin News): Cho phép khách hàng xem các bài viết thể thao/khuyến mãi và admin quản lý nội dung bài viết',
        'Truy vấn an toàn với PDO: Sử dụng Prepared Statements 100% trong các thao tác dữ liệu, phòng chống triệt để tấn công SQL Injection',
        'Đóng gói Docker hoàn chỉnh: Cấu hình môi trường Apache, PHP 8.2 và MySQL chạy đồng bộ giữa các thành viên'
      ],
      challenges: [
        'Lỗi URL Rewrite và Routing khi chạy Docker trên Linux: Trên máy cá nhân dùng XAMPP thì đường dẫn chạy bình thường, nhưng khi đưa lên Docker Linux, router bị lỗi 404 do Apache chưa bật mod_rewrite và quy tắc rewrite trong .htaccess chưa chuẩn. Đã cấu hình lại file VirtualHost trong Dockerfile và chuẩn hóa file .htaccess để định tuyến chính xác.',
        'Lỗi "Headers already sent" khi điều hướng trang và xử lý session: Trong mô hình Custom MVC thuần, việc xuất HTML hoặc khoảng trắng trước khi gọi header(\'Location: ...\') hoặc session_start() làm ứng dụng bị lỗi. Đã áp dụng cơ chế Output Buffering (ob_start()) và chuẩn hóa luồng controller trước khi nạp view.'
      ],
      whatILearned: [
        'Hiểu sâu sắc cách thức một mô hình MVC hoạt động từ gốc rễ: Vòng đời request, cấu trúc thư mục, router tập trung và phân tách trách nhiệm giữa Model, View, Controller.',
        'Kỹ năng làm việc nhóm thực tế với Git: Phân nhánh tính năng (ducbao, ducdat), quy trình pull/push và xử lý merge conflict.',
        'Kinh nghiệm thực hành DevOps cơ bản: Đóng gói Docker, cấu hình Apache server và làm quen với môi trường Linux.'
      ]
    }
  },
  {
    id: 'no-coffe',
    slug: 'no-coffe',
    title: 'NoCoffe - POS Quán Cà Phê',
    description: 'Hệ thống POS bán hàng quán cà phê: giao diện SPA mượt mà, quản lý kho nguyên liệu, hao hụt và hỗ trợ thao tác offline với IndexedDB/LocalStorage.',
    longDescription: 'Phần mềm quản lý bán hàng và vận hành quán cà phê hiện đại. Đảm nhiệm vai trò Trưởng nhóm (Project Lead): thiết kế Single Page Application (SPA) tốc độ cao bằng JavaScript thuần theo mô hình MVC, backend REST API Node.js/Express, cơ sở dữ liệu MongoDB/Mongoose, tự động trừ tồn kho theo định lượng công thức món, ghi nhận hao hụt và lưu trữ dữ liệu cục bộ qua IndexedDB/LocalStorage.',
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
      client: 'Vanilla JS Single Page Application (Kiến trúc MVC Client: Controller, Models, Views)',
      application: 'Node.js & Express.js REST API (Quản trị đơn hàng, kho nguyên liệu, ca làm & nhân sự)',
      dataLayer: 'Browser LocalStorage / IndexedDB Client Cache & Mongoose ODM',
      database: 'MongoDB Document Database (Menu, Ingredients, Orders, Waste, Shifts & Users)',
      diagramSteps: [
        'Thu ngân bấm chọn món/topping trên giao diện SPA -> POSModel cập nhật giỏ hàng tức thì',
        'Bấm thanh toán -> Gửi request checkout đến REST API Node.js/Express',
        'Backend bóc tách công thức (recipe) của món và tự động trừ số lượng tồn kho nguyên liệu thô trong MongoDB',
        'Ghi nhận doanh thu đơn hàng vào ca làm việc hiện tại và cập nhật báo cáo ca',
        'Tầng Database.js kết hợp LocalStorage duy trì trạng thái đăng nhập và dữ liệu bán hàng mượt mà'
      ]
    },
    caseStudy: {
      overview: 'Phần mềm POS bán hàng và quản trị vận hành chuyên biệt cho mô hình quán cà phê (Nơ Coffee). Dự án tôi đảm nhiệm vai trò Trưởng nhóm (Project Lead), phụ trách thiết kế giao diện Single Page Application (SPA) tốc độ cao bằng JavaScript thuần, xây dựng backend REST API với Node.js/Express và cơ sở dữ liệu MongoDB/Mongoose.',
      problem: 'Trong giờ cao điểm tại quán cà phê, nhân viên thu ngân cần màn hình gọi món phản hồi tức thì để giảm thiểu thời gian chờ đợi của khách hàng. Nếu kết nối mạng chập chờn, giao diện bán hàng dễ bị treo hoặc mất dữ liệu giỏ hàng. Ngoài ra, việc quản lý thất thoát nguyên liệu thô theo từng ly đồ uống bán ra, theo dõi hàng hư hao (waste) và tính tiền lương nhân viên theo giờ làm việc gặp nhiều khó khăn nếu ghi chép sổ sách thủ công.',
      solution: 'Xây dựng ứng dụng SPA bán hàng nhanh chóng theo kiến trúc MVC phía client bằng JavaScript thuần. Ứng dụng sử dụng LocalStorage và IndexedDB (Database.js) để đệm dữ liệu người dùng và trạng thái bán hàng, giúp thao tác thu ngân mượt mà không bị gián đoạn. Phía backend Express.js và MongoDB đảm nhiệm xử lý đơn hàng, tự động khấu trừ kho nguyên liệu theo định lượng công thức (recipe), ghi nhận hao hụt, quản lý ca làm và tính lương nhân viên.',
      myRole: 'Trưởng nhóm (Project Lead) & Lập trình Full-stack: Định hình kiến trúc SPA tổng thể, thiết kế mô hình MVC phía client (MainController, POSModel, InventoryModel, WasteModel, Database.js), xây dựng toàn bộ RESTful API trên Node.js/Express, thiết kế schema Mongoose trên MongoDB và triển khai cơ chế lưu trữ cục bộ.',
      systemArchitecture: 'Kiến trúc SPA hướng module: Phía Frontend dùng JavaScript thuần chia theo Controller - Model - View mà không cần framework nặng, giúp trang tải rất nhanh trên các thiết bị bán hàng tại quầy. Phía Backend là REST API Node.js và Express.js, kết nối cơ sở dữ liệu NoSQL MongoDB thông qua Mongoose ODM.',
      databaseDesign: 'Mô hình dữ liệu MongoDB NoSQL gồm các collection chính: users (tài khoản, phân quyền dev-admin/manager/employee, cấu hình lương theo giờ hourlyWage), menuitems & categories (thực đơn, danh mục, giá bán và công thức định lượng recipe), ingredients (kho nguyên liệu thô, đơn vị tính, tồn kho), orders (đơn hàng thanh toán), wastes (ghi nhận nguyên liệu hư hỏng/xuất hủy), shifts & attendances (quản lý ca làm việc và chấm công).',
      keyFeatures: [
        'Màn hình POS gọi món SPA: Thao tác chọn món, size, mức đường/đá, topping cực nhanh, giỏ hàng phản hồi tức thì',
        'Tự động trừ kho theo công thức món: Bán đồ uống sẽ tự động trừ chính xác định lượng hạt cà phê, sữa, siro tương ứng trong kho nguyên liệu',
        'Quản lý kho & Hao hụt nguyên liệu: Nhập kho (restock), xuất kho và ghi nhận xuất hủy hao hụt (waste) chi tiết theo ngày',
        'Quản lý ca làm & Chấm công: Mở ca, chốt doanh thu ca bán, chấm công và tự động tính tiền lương nhân viên theo giờ',
        'Phân quyền tài khoản 3 cấp độ: Dev-Admin (toàn quyền hệ thống), Manager (quản lý quán, menu, kho), Employee (thu ngân bán hàng)',
        'Lưu trữ cục bộ với LocalStorage/IndexedDB: Giữ vững phiên làm việc và không mất trạng thái đơn hàng khi mạng yếu'
      ],
      challenges: [
        'Tổ chức kiến trúc SPA bằng JavaScript thuần không dùng framework: Để giao diện không bị giật lag và code không bị rối khi nhiều module cùng tương tác với giỏ hàng và dữ liệu, tôi đã tự thiết kế mô hình MVC rõ ràng (MainController điều phối các model POSModel, InventoryModel, WasteModel) và phân chia view theo template.',
        'Khấu trừ tồn kho nguyên liệu chính xác theo công thức phức tạp: Mỗi món có thể có nhiều tùy chọn (size lớn nhỏ, topping thêm). Đã thiết kế cấu trúc recipe linh hoạt trong MenuItem Schema và xử lý logic trừ kho an toàn trên MongoDB khi đơn hàng thanh toán thành công.'
      ],
      whatILearned: [
        'Kỹ năng lập trình Single Page Application (SPA) từ nền tảng JavaScript thuần, nắm vững DOM manipulation và tư duy tổ chức mã nguồn MVC.',
        'Kinh nghiệm thiết kế RESTful API thực tế với Node.js, Express.js và mô hình hóa dữ liệu NoSQL với MongoDB / Mongoose.',
        'Năng lực làm Trưởng nhóm (Project Lead): Khảo sát nhu cầu vận hành F&B thực tế, phân chia module và hoàn thiện sản phẩm đáp ứng đúng nhu cầu người dùng.'
      ]
    }
  }
];

export const getAllProjects = (): Project[] => projectsData;

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(p => p.slug === slug);
};
