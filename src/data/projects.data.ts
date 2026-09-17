import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'enterprise-management-system',
    title: 'Enterprise Inventory & Resource Management System',
    description: 'Tiered desktop management application built with C# WinForms, ADO.NET, and Microsoft SQL Server featuring strict transaction boundaries and relational integrity.',
    longDescription: 'A production-focused enterprise desktop solution engineered to handle multi-warehouse inventory auditing, supplier purchase orders, and stock rebalancing. Built from the ground up using a layered architectural model to isolate WinForms UI components from transactional business rules and database communication.',
    category: 'Desktop',
    technologies: [
      { id: 'csharp', name: 'C#', category: 'languages', icon: 'csharp' },
      { id: 'winforms', name: 'WinForms', category: 'dotnet', icon: 'windows' },
      { id: 'adonet', name: 'ADO.NET', category: 'dotnet', icon: 'adonet' },
      { id: 'sqlserver', name: 'SQL Server', category: 'databases', icon: 'sqlserver' },
      { id: 'sql', name: 'SQL', category: 'languages', icon: 'sql' }
    ],
    thumbnail: '/assets/projects/winforms.svg',
    githubUrl: 'https://github.com/[YOUR_GITHUB]/enterprise-inventory-winforms',
    demoUrl: undefined,
    featured: true,
    architecture: {
      client: 'C# WinForms Presentation Layer (Custom Controls & Form Validation)',
      application: 'Business Logic Layer (BLL - Domain Validation & Calculation Rules)',
      dataLayer: 'Data Access Layer (DAL - ADO.NET SqlClient with Connection Pooling)',
      database: 'Microsoft SQL Server (Stored Procedures, Foreign Keys & Transactions)',
      diagramSteps: [
        'WinForms Form Event -> BLL Validator',
        'BLL Service -> DAL Repository',
        'DAL opens pooled SqlConnection',
        'SqlCommand invokes parameter-driven Stored Procedure',
        'SqlTransaction guarantees commit or rollback',
        'SqlDataReader streams typed DTOs back to BLL and DataGridView'
      ]
    },
    caseStudy: {
      overview: 'Designed and implemented an on-premise inventory control suite for mid-sized wholesale distribution, managing stock status, item reorders, and transactional audit trails across multiple storage facilities.',
      problem: 'The organization previously tracked stock adjustments via disparate spreadsheets, resulting in stock discrepancies, race conditions when two operators registered stock movements simultaneously, and lack of historical accountability.',
      solution: 'Engineered a unified C# WinForms application adhering to strict 3-tier architecture. Built custom ADO.NET repositories utilizing parameterization and dedicated SQL Server stored procedures wrapped inside explicit database transactions.',
      myRole: 'Lead Software Developer — Responsible for end-to-end database schema modeling, ADO.NET data access design, WinForms UI responsiveness, and transaction rollback mechanics.',
      systemArchitecture: 'Presentation Layer (WinForms forms, custom DataGridView with double buffering) communicates strictly with the Business Logic Layer (BLL). The BLL enforces inventory balance checks and passes entity models to the Data Access Layer (DAL). The DAL manages SqlConnections, SqlCommands, and SqlTransactions cleanly with the `using` pattern.',
      databaseDesign: 'Structured relational schema in SQL Server with 3NF normalization: Products, Categories, Warehouses, StockEntries, PurchaseOrders, and InventoryAuditLog. Indexed foreign keys and created unique composite indexes on `(WarehouseId, ProductId)` to prevent duplicate inventory records.',
      keyFeatures: [
        'Layered separation of UI, Business Logic, and Data Access',
        'Parameterized SQL queries and stored procedures preventing SQL injection',
        'Atomic multi-item transfer between warehouses using SqlTransaction',
        'Real-time low-stock alerting and automatic reorder calculation',
        'Exportable transactional audit logs and reporting filters'
      ],
      challenges: [
        'WinForms UI freezing during large data imports: Solved using asynchronous background workers (`async/await` and `Task.Run`) to keep the UI thread responsive.',
        'Concurrency conflicts during simultaneous stock deduction: Implemented pessimistic locking via SQL Server `WITH (UPDLOCK, ROWLOCK)` within the stored procedure.'
      ],
      whatILearned: [
        'Deep mastery of ADO.NET connection lifecycle, command parameter typing, and transaction isolation levels.',
        'Proper design patterns for desktop enterprise applications: separating presentation logic from data persistence.',
        'Techniques to optimize SQL Server query execution plans and index usage on high-volume tables.'
      ]
    }
  },
  {
    id: '2',
    slug: 'fullstack-ecommerce-platform',
    title: 'Modular Full-stack Web Portal & E-Commerce API',
    description: 'Dynamic web application featuring a secure PHP backend, MySQL relational modeling, responsive Bootstrap 5 interface, and TypeScript interactions.',
    longDescription: 'A modular, service-oriented web portal designed with clean separation between RESTful backend endpoints and a responsive client interface. The PHP backend leverages PDO with strictly parameterized statements for complete SQL injection immunity, paired with a normalized MySQL database.',
    category: 'Web',
    technologies: [
      { id: 'html5', name: 'HTML5', category: 'web', icon: 'html5' },
      { id: 'css3', name: 'CSS3', category: 'web', icon: 'css3' },
      { id: 'typescript', name: 'TypeScript', category: 'languages', icon: 'typescript' },
      { id: 'bootstrap', name: 'Bootstrap 5', category: 'web', icon: 'bootstrap' },
      { id: 'php', name: 'PHP', category: 'languages', icon: 'php' },
      { id: 'mysql', name: 'MySQL', category: 'databases', icon: 'mysql' },
      { id: 'sql', name: 'SQL', category: 'languages', icon: 'sql' }
    ],
    thumbnail: '/assets/projects/ecommerce.svg',
    githubUrl: 'https://github.com/[YOUR_GITHUB]/modular-ecommerce-php-mysql',
    demoUrl: 'https://demo-ecommerce.example.com',
    featured: true,
    architecture: {
      client: 'Responsive Browser UI (HTML5, Bootstrap 5 Grid, TypeScript Modules)',
      application: 'PHP Backend (Object-Oriented Controllers, Middleware & Route Dispatcher)',
      dataLayer: 'Database Access Layer (PHP Data Objects - PDO with Prepared Statements)',
      database: 'MySQL 8.0 InnoDB (Normalized Relational Tables with Referential Integrity)',
      diagramSteps: [
        'Browser TypeScript client dispatches asynchronous fetch request',
        'PHP Front Controller parses request URI and parameters',
        'Middleware performs session authentication and input sanitization',
        'Controller calls Domain Repository using PDO prepared statements',
        'MySQL processes query using indexed primary/foreign keys',
        'Controller serializes JSON response with HTTP status codes'
      ]
    },
    caseStudy: {
      overview: 'Developed a comprehensive web commerce solution featuring product catalog browsing, faceted filtering, shopping cart persistence, and order fulfillment tracking.',
      problem: 'Legacy small-business web platforms frequently suffer from spaghetti code architectures where raw SQL is mixed directly inside presentation templates, causing severe vulnerabilities and unmaintainable codebases.',
      solution: 'Constructed an architectural pattern cleanly segregating routing, business controllers, PDO database operations, and frontend asset pipelines. Replaced bloated UI libraries with tailored Bootstrap 5 utilities and modern TypeScript.',
      myRole: 'Full-stack Developer — Architected the relational MySQL schema, implemented PHP OOP controllers, and built responsive client-side UI with TypeScript.',
      systemArchitecture: 'Client requests hit a centralized PHP router, passing through validation middleware before invoking controller actions. Controllers communicate with repository classes that interact with MySQL strictly through PDO instances with `PDO::ATTR_EMULATE_PREPARES => false`.',
      databaseDesign: 'MySQL 8.0 InnoDB engine: normalized tables for `users`, `categories`, `products`, `orders`, and `order_items`. Configured `ON DELETE RESTRICT` constraints on order records to ensure historical financial data is never orphaned.',
      keyFeatures: [
        '100% prepared statement execution preventing SQL injection vulnerabilities',
        'Responsive mobile-first interface styled with custom Bootstrap 5 tokens',
        'TypeScript-powered cart state management and instant price recalculations',
        'Faceted search by category, price boundaries, and stock availability',
        'Structured RESTful JSON responses with explicit error messaging'
      ],
      challenges: [
        'Maintaining responsive layout consistency across desktop and narrow mobile screens: Custom CSS media queries were paired with Bootstrap’s grid system to ensure fluid layouts at 390px viewports.',
        'Protecting against race conditions during simultaneous checkout on limited stock items: Implemented MySQL row locks (`SELECT ... FOR UPDATE`) within an InnoDB transaction.'
      ],
      whatILearned: [
        'How to write modern, clean, object-oriented PHP without bloated external frameworks.',
        'Best practices for designing clean relational schemas in MySQL with proper normalization and index strategies.',
        'TypeScript patterns for typed client-server contracts.'
      ]
    }
  },
  {
    id: '3',
    slug: 'cloud-data-hub',
    title: 'Cloud Data Operations Hub & Realtime Dashboard',
    description: 'Cloud-native database application built with Supabase PostgreSQL, typed TypeScript clients, and real-time database subscription streams.',
    longDescription: 'An operational data management platform leveraging PostgreSQL inside Supabase. Features granular Row Level Security (RLS) policies at the database layer, auto-generated RESTful endpoints, and WebSocket channels for instant data synchronization across concurrent browser sessions.',
    category: 'Database',
    technologies: [
      { id: 'typescript', name: 'TypeScript', category: 'languages', icon: 'typescript' },
      { id: 'supabase', name: 'Supabase', category: 'databases', icon: 'supabase' },
      { id: 'sql', name: 'SQL (PostgreSQL)', category: 'languages', icon: 'sql' },
      { id: 'html5', name: 'HTML5', category: 'web', icon: 'html5' },
      { id: 'css3', name: 'CSS3', category: 'web', icon: 'css3' }
    ],
    thumbnail: '/assets/projects/supabase.svg',
    githubUrl: 'https://github.com/[YOUR_GITHUB]/cloud-data-hub-supabase',
    demoUrl: 'https://cloud-data-hub.example.com',
    featured: true,
    architecture: {
      client: 'Single Page Interface (TypeScript, Reactive State, Custom CSS Design System)',
      application: 'Supabase Managed Services (PostgREST API & Realtime WebSocket Engine)',
      dataLayer: 'Supabase JS SDK with Typed Database Schema Contracts',
      database: 'PostgreSQL Database Engine with Row Level Security (RLS) & Triggers',
      diagramSteps: [
        'Client initiates connection with Supabase Public Anon Key',
        'Supabase PostgREST layer inspects JWT and matches database RLS rules',
        'PostgreSQL executes query directly with tenant boundary checks',
        'PostgreSQL Write-Ahead Log (WAL) streams mutations to Supabase Realtime',
        'WebSocket broadcasts payload to subscribed client instances',
        'Client UI updates reactively without reloading page'
      ]
    },
    caseStudy: {
      overview: 'Created an operational telemetry and collaborative inventory dashboard for distributed team members to track operational logs, tasks, and asset allocations in realtime.',
      problem: 'Traditional polling mechanisms waste bandwidth and cause noticeable sync lag. Furthermore, shifting authorization logic into frontend code creates dangerous security loopholes.',
      solution: 'Employed Supabase PostgreSQL as the backend foundation. Enforced zero-trust data access strictly at the database layer using Row Level Security (RLS) policies and PostgreSQL triggers, with WebSocket subscriptions delivering live updates.',
      myRole: 'Cloud & Database Developer — Designed PostgreSQL relational tables, authored RLS policies, configured triggers, and developed the TypeScript frontend application.',
      systemArchitecture: 'The frontend interacts with the Supabase client library utilizing auto-generated database types. Authentication claims are passed securely to PostgreSQL where RLS evaluates each row against user roles. Realtime channels listen for `INSERT`, `UPDATE`, and `DELETE` events.',
      databaseDesign: 'PostgreSQL schema comprising `tenants`, `profiles`, `telemetry_logs`, and `tasks`. Leveraged PostgreSQL `TIMESTAMPTZ`, UUID primary keys (`gen_random_uuid()`), JSONB columns for dynamic metadata, and database triggers for automatic `updated_at` timestamps.',
      keyFeatures: [
        'PostgreSQL Row Level Security (RLS) policies guaranteeing multi-tenant data isolation',
        'Real-time WebSocket subscriptions synchronizing state across multiple devices',
        'TypeScript-generated database definitions for end-to-end type safety',
        'Graceful local fallback mechanism for offline demonstration mode',
        'Audit trigger functions recording historical mutation changes'
      ],
      challenges: [
        'Configuring comprehensive RLS policies that handle both public read and authenticated write paths: Crafted separate policies for `SELECT`, `INSERT`, and `UPDATE` with explicit `USING` and `WITH CHECK` clauses.',
        'Handling WebSocket reconnection gracefully during network instability: Built client retry policies and cache synchronization.'
      ],
      whatILearned: [
        'Deep understanding of PostgreSQL enterprise capabilities (RLS, WAL streaming, trigger functions).',
        'Modern cloud database architecture: leveraging managed databases securely with public anonymous keys.',
        'Reactive TypeScript patterns for streaming data pipelines.'
      ]
    }
  },
  {
    id: '4',
    slug: 'distributed-sql-analytics',
    title: 'TiDB Cloud Distributed SQL Analytical Engine',
    description: 'High-scale distributed SQL benchmark exploring horizontal partitioning, distributed joins, and HTAP workloads on TiDB Cloud.',
    longDescription: 'An analytical exploration of NewSQL architectures using TiDB Cloud. Benchmarked distributed database mechanics, horizontal data sharding, TiKV distributed key-value storage nodes, and transactional consistency across distributed clusters.',
    category: 'Database',
    technologies: [
      { id: 'tidb', name: 'TiDB Cloud', category: 'databases', icon: 'tidb' },
      { id: 'sql', name: 'SQL', category: 'languages', icon: 'sql' },
      { id: 'typescript', name: 'TypeScript', category: 'languages', icon: 'typescript' }
    ],
    thumbnail: '/assets/projects/tidb.svg',
    githubUrl: 'https://github.com/[YOUR_GITHUB]/tidb-distributed-sql-analytics',
    demoUrl: undefined,
    featured: false,
    architecture: {
      client: 'Analytical Query Runner & Benchmark Suite (TypeScript / Node)',
      application: 'Query Orchestration Service & Connection Pooler',
      dataLayer: 'MySQL-compatible TLS Connection Interface with Prepared Statements',
      database: 'TiDB Cloud Distributed Cluster (Stateless TiDB nodes -> TiKV Storage Engine)',
      diagramSteps: [
        'Client submits high-cardinality analytical aggregation query',
        'Stateless TiDB server receives query and compiles distributed execution plan',
        'Cost-based Optimizer pushes down filter predicates to distributed TiKV coprocessor',
        'TiKV storage nodes scan partitioned key ranges in parallel',
        'Intermediate aggregates stream back to TiDB server for final merge',
        'Results returned with detailed EXPLAIN execution metrics'
      ]
    },
    caseStudy: {
      overview: 'Constructed an analytical evaluation environment on TiDB Cloud to process multi-million record telemetry datasets, comparing distributed query execution times against single-node MySQL setups.',
      problem: 'As relational datasets scale into tens of millions of rows, single-node RDBMS instances suffer from memory exhaustion, expensive table locks during schema changes, and slow cross-table aggregations.',
      solution: 'Configured a cloud-native TiDB cluster. Modeled range-partitioned tables and pushed analytical aggregations down to TiKV coprocessor nodes, achieving sub-second query response times without rewriting MySQL SQL syntax.',
      myRole: 'Database Systems Analyst — Set up TiDB Cloud cluster, designed distributed table partitioning schemes, ran performance benchmarks, and documented distributed execution plans.',
      systemArchitecture: 'The query runner establishes secure TLS connections via standard MySQL drivers to the TiDB SQL layer. TiDB routes transactions using the Raft consensus protocol across distributed TiKV storage nodes.',
      databaseDesign: 'Range-partitioned schemas on `event_timestamp`, distributed primary keys utilizing `AUTO_RANDOM` to eliminate write hotspotting on primary key insertion, and columnar projections.',
      keyFeatures: [
        'Horizontal scaling demonstration without sharding middleware',
        'MySQL 8.0 protocol compatibility allowing standard driver integration',
        'Deep execution plan analysis (`EXPLAIN ANALYZE`) demonstrating coprocessor pushdown',
        'Hotspot mitigation utilizing `AUTO_RANDOM` distributed key generation',
        'Strong ACID consistency guaranteed by Raft consensus protocol'
      ],
      challenges: [
        'Avoiding monotonic primary key hotspotting on distributed write streams: Replaced standard `AUTO_INCREMENT` with TiDB’s `AUTO_RANDOM` to distribute writes evenly across TiKV regions.',
        'Tuning distributed joins across large tables: Analyzed execution plans to force hash joins over distributed broadcast joins.'
      ],
      whatILearned: [
        'How modern NewSQL and distributed databases solve horizontal scaling while preserving ACID guarantees.',
        'The operational differences between single-node MySQL and distributed TiKV storage engines.',
        'Practical execution plan optimization for distributed query pushdown.'
      ]
    }
  },
  {
    id: '5',
    slug: 'realtime-collaboration-workspace',
    title: 'Real-time Collaborative Workspace & Sync Engine',
    description: 'Interactive collaborative canvas and task engine powered by Firebase Firestore, real-time snapshot listeners, and document security rules.',
    longDescription: 'A multi-user synchronization workspace that allows distributed collaborators to modify shared task boards, live notes, and status trackers simultaneously with zero-latency visual feedback and conflict mitigation.',
    category: 'Web',
    technologies: [
      { id: 'javascript', name: 'JavaScript', category: 'languages', icon: 'javascript' },
      { id: 'firebase', name: 'Firebase', category: 'backend', icon: 'firebase' },
      { id: 'html5', name: 'HTML5', category: 'web', icon: 'html5' },
      { id: 'css3', name: 'CSS3', category: 'web', icon: 'css3' }
    ],
    thumbnail: '/assets/projects/firebase.svg',
    githubUrl: 'https://github.com/[YOUR_GITHUB]/firebase-realtime-workspace',
    demoUrl: 'https://collab-workspace.example.com',
    featured: false,
    architecture: {
      client: 'Browser Collaboration UI (JavaScript ES6+, DOM Listeners, Optimistic Updates)',
      application: 'Firebase Client SDK (Snapshot Listeners, Offline Cache Manager)',
      dataLayer: 'Cloud Firestore Realtime Sync Protocol & Firebase Auth Token Pipeline',
      database: 'Cloud Firestore (Document & Collection NoSQL Model with Security Rules)',
      diagramSteps: [
        'User drags task or modifies note content on screen',
        'UI applies optimistic local render immediately for 0ms visual latency',
        'Firebase SDK writes mutation to local IndexedDB persistence cache',
        'Mutation streams over persistent connection to Cloud Firestore',
        'Firestore evaluates document security rules and commits change',
        'Snapshot listener broadcasts change to peer collaborators in real time'
      ]
    },
    caseStudy: {
      overview: 'Engineered a real-time collaborative workspace supporting Kanban boards, shared sticky notes, and presence indicators for remote development squads.',
      problem: 'Coordinating team workflows on static web pages leads to desynchronized data, lost updates when two members edit concurrently, and tedious manual refreshes.',
      solution: 'Implemented Cloud Firestore snapshot listeners to deliver reactive bi-directional data flow. Structured NoSQL document hierarchies with declarative security rules to enforce document authorization.',
      myRole: 'Frontend & Cloud Services Developer — Built UI interactions, configured Firebase project services, wrote Firestore security rules, and handled optimistic UI updates.',
      systemArchitecture: 'The web client connects to Firebase Authentication and Cloud Firestore. `onSnapshot()` listeners capture collection-level changes, while optimistic rendering guarantees immediate responsiveness even under throttled network conditions.',
      databaseDesign: 'NoSQL document schema: root collections `workspaces`, `boards`, and subcollections `tasks`, `comments`. Maintained denormalized user avatar and name fields in tasks to minimize unnecessary document reads.',
      keyFeatures: [
        'Real-time bi-directional synchronization with Firestore snapshot listeners',
        'Offline capability with local persistence and automatic synchronization on reconnect',
        'Declarative Firestore security rules verifying user ownership and workspace membership',
        'Optimistic client rendering with error rollback protection',
        'Denormalized NoSQL query patterns optimizing read latency'
      ],
      challenges: [
        'Preventing concurrent write clobbering: Used Firestore transactional atomic writes (`runTransaction`) for sequence numbering and board column reordering.',
        'Managing offline state smoothly: Handled offline queue status indicators to notify users when mutations were pending sync.'
      ],
      whatILearned: [
        'Architectural differences between relational schemas and NoSQL document models.',
        'Designing secure client-side database access using declarative Cloud Security Rules.',
        'Managing local state reconciliation with remote event streams.'
      ]
    }
  },
  {
    id: '6',
    slug: 'high-throughput-data-service',
    title: 'High-Throughput Batch Processing & Enterprise Service',
    description: 'Resilient enterprise backend data engine built with Java and SQL, utilizing multi-threaded worker pools and optimized JDBC batch execution.',
    longDescription: 'A backend processing daemon built in Java to consume, validate, transform, and persist large volumes of external transactional data into a relational database with strict consistency, thread-safe queuing, and connection pooling.',
    category: 'Backend',
    technologies: [
      { id: 'java', name: 'Java', category: 'languages', icon: 'java' },
      { id: 'sql', name: 'SQL', category: 'languages', icon: 'sql' }
    ],
    thumbnail: '/assets/projects/java.svg',
    githubUrl: 'https://github.com/[YOUR_GITHUB]/high-throughput-data-service-java',
    demoUrl: undefined,
    featured: false,
    architecture: {
      client: 'Batch Ingestion Source (Structured File Streams / External Message Queue)',
      application: 'Java Processing Core (ExecutorService, Producer-Consumer Thread Pool)',
      dataLayer: 'JDBC Layer with HikariCP Connection Pool & PreparedStatement Batching',
      database: 'Relational Database with Tuned Indexes & Transaction Savepoints',
      diagramSteps: [
        'Producer threads read and parse structured input records',
        'Validation rules filter malformed records into dead-letter storage',
        'Worker threads collect verified entities into batch chunks (500-1000 items)',
        'Worker requests connection from HikariCP pooled dataSource',
        'PreparedStatement executes `addBatch()` and `executeBatch()`',
        'Connection commits transaction and returns to pool'
      ]
    },
    caseStudy: {
      overview: 'Engineered a high-performance Java batch processing utility tasked with importing and reconciling thousands of daily transactional records into an enterprise database within tightly constrained time windows.',
      problem: 'Individual single-record inserts over standard database connections led to massive network latency, memory spikes, and unacceptable processing runtimes lasting multiple hours.',
      solution: 'Refactored the ingestion pipeline into a concurrent producer-consumer architecture using Java’s `ExecutorService`, paired with HikariCP connection pooling and parameterized JDBC batch operations (`addBatch() / executeBatch()`).',
      myRole: 'Backend Systems Developer — Implemented domain models, concurrent worker pools, JDBC repository abstractions, and exception isolation mechanisms.',
      systemArchitecture: 'A multi-threaded pipeline where file readers buffer chunks into a bounded blocking queue. Worker threads de-queue batches, validate domain constraints, and execute chunked JDBC transactions with auto-commit disabled.',
      databaseDesign: 'Optimized relational schema featuring temporary staging tables, unlogged staging loads, followed by atomic set-based MERGE/UPSERT into master tables to minimize index maintenance during ingestion.',
      keyFeatures: [
        'Concurrent multi-threaded processing utilizing Java ExecutorService and BlockingQueue',
        'High-speed batch insertions via JDBC `executeBatch()` reducing network roundtrips by 90%',
        'Connection pooling with HikariCP configured for optimum thread-to-connection ratios',
        'Defensive exception handling with transaction savepoints and dead-letter queue routing',
        'Stream-based memory management preventing OutOfMemory errors on gigabyte-sized files'
      ],
      challenges: [
        'Handling partial batch failures where 1 invalid row caused the entire 1,000-row batch to fail: Implemented two-pass error isolation that identifies the culprit row, logs it to a dead-letter table, and commits the remaining 999 valid rows.',
        'Database connection starvation under heavy thread concurrency: Tuned HikariCP pool size based on CPU cores and disk IOPS capabilities.'
      ],
      whatILearned: [
        'Advanced concurrent programming in Core Java (Thread pools, synchronization, memory visibility).',
        'Deep optimization of JDBC operations: batch sizes, fetch sizes, and statement caching.',
        'Resilience patterns in high-throughput enterprise batch pipelines.'
      ]
    }
  }
];

export const getAllProjects = (): Project[] => projectsData;

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(p => p.slug === slug);
};
