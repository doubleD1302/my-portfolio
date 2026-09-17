import { DatabaseCapability } from '../types';

export const databaseCapabilities: DatabaseCapability[] = [
  {
    id: 'sqlserver',
    name: 'Microsoft SQL Server',
    subtitle: 'Enterprise Relational Database Management System',
    description: 'Extensive work with SQL Server in enterprise desktop (.NET / C# WinForms) environments. Focuses on data integrity, execution plans, and stored procedure encapsulation.',
    capabilities: [
      'Normalized relational schema design (1NF, 2NF, 3NF)',
      'Complex multi-table JOINs, subqueries, and Common Table Expressions (CTEs)',
      'Parameterized stored procedures and transactional error handling (TRY...CATCH)',
      'Deep integration with ADO.NET SqlClient and connection pooling',
      'Clustered and non-clustered index tuning for fast lookup paths'
    ],
    architectureRole: 'Core persistence engine for high-reliability enterprise desktop systems and on-premise transactional software.',
    badge: 'Enterprise RDBMS',
    icon: 'sqlserver'
  },
  {
    id: 'mysql',
    name: 'MySQL 8.0',
    subtitle: 'High-Performance Open-Source Relational Database',
    description: 'Experienced in developing relational schemas for dynamic web platforms, optimizing queries for web throughput, and integrating with PHP and Node backends.',
    capabilities: [
      'InnoDB table design with strict ACID referential integrity',
      'Foreign key cascading rules (CASCADE, RESTRICT, SET NULL)',
      'Prepared statements via PDO preventing injection vectors',
      'Efficient pagination using indexed cursor and offset patterns',
      'Slow query log analysis and EXPLAIN query plan inspection'
    ],
    architectureRole: 'Reliable relational backend for high-traffic web applications, API services, and e-commerce platforms.',
    badge: 'Web & Services',
    icon: 'mysql'
  },
  {
    id: 'tidb',
    name: 'TiDB Cloud',
    subtitle: 'Distributed SQL & Hybrid Transactional/Analytical Engine',
    description: 'Exploration and benchmarking of modern NewSQL systems. Leverages TiDB Cloud for horizontally scalable workloads with standard MySQL syntax compatibility.',
    capabilities: [
      'Distributed SQL query processing across stateless computing nodes',
      'TiKV distributed key-value storage engine powered by Raft consensus',
      'Hotspot avoidance using AUTO_RANDOM distributed primary keys',
      'Standard MySQL 8.0 protocol and client library compatibility',
      'HTAP architecture separating analytical and transactional processing'
    ],
    architectureRole: 'Next-generation cloud database for applications requiring horizontal elasticity without sacrificing relational guarantees.',
    badge: 'Distributed SQL',
    icon: 'tidb'
  },
  {
    id: 'supabase',
    name: 'Supabase (PostgreSQL)',
    subtitle: 'Managed Cloud PostgreSQL with RLS & Realtime Engine',
    description: 'Primary backend database for modern full-stack web applications. Utilizes PostgreSQL advanced features combined with instant API generation and live WebSocket subscriptions.',
    capabilities: [
      'Full PostgreSQL relational power, extensions (pgcrypto), and UUIDs',
      'Granular Row Level Security (RLS) policies enforcing multi-tenant isolation',
      'Auto-generated RESTful endpoints via PostgREST',
      'Realtime change-data-capture (CDC) over persistent WebSockets',
      'Database triggers, generated columns, and stored functions'
    ],
    architectureRole: 'Modern cloud database powering this portfolio and reactive web applications with zero-trust database security.',
    badge: 'Cloud PostgreSQL',
    icon: 'supabase'
  },
  {
    id: 'mongodb',
    name: 'MongoDB / Mongoose',
    subtitle: 'High-Performance Document Store & Aggregation Pipeline',
    description: 'Applied in F&B and Point-of-Sale systems (NoCoffe). Specializes in document modeling for complex menus, ingredient recipes, and resilient offline synchronization.',
    capabilities: [
      'Document schema design with embedded subdocuments & references',
      'Mongoose ODM schema validation, pre/post middleware hooks',
      'Aggregation pipelines for daily shift revenue & inventory shrinkage reports',
      'Indexed queries for sub-millisecond cashier order processing',
      'Sync reconciliation strategies with client IndexedDB/LocalStorage'
    ],
    architectureRole: 'Primary NoSQL engine for high-velocity transactional catalogs, rapid schema evolution, and offline-first web clients.',
    badge: 'Document NoSQL',
    icon: 'mongodb'
  }
];
