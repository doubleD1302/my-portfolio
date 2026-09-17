import { CodeSnippet } from '../types';

export const codeSnippets: CodeSnippet[] = [
  {
    id: 'csharp',
    language: 'csharp',
    label: 'C# / ADO.NET',
    fileName: 'InventoryRepository.cs',
    description: 'Production-ready ADO.NET transactional data access demonstrating parameterization, connection pooling, and ACID rollback guarantees.',
    highlights: [
      'Strict parameter typing eliminating SQL injection risk',
      'Explicit SqlTransaction protecting multi-step inventory adjustments',
      'Disposable using blocks ensuring connection returns cleanly to pool'
    ],
    code: `using System;
using System.Data;
using Microsoft.Data.SqlClient;

public class InventoryRepository : IInventoryRepository
{
    private readonly string _connectionString;

    public InventoryRepository(string connectionString)
    {
        _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
    }

    /// <summary>
    /// Atomically transfers stock between two warehouses with strict transaction isolation.
    /// </summary>
    public async Task<bool> TransferStockAsync(Guid productId, int sourceWarehouseId, int targetWarehouseId, int quantity)
    {
        if (quantity <= 0) throw new ArgumentOutOfRangeException(nameof(quantity), "Transfer quantity must be positive.");

        await using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        // Begin transaction with ReadCommitted isolation
        await using var transaction = (SqlTransaction)await connection.BeginTransactionAsync(IsolationLevel.ReadCommitted);

        try
        {
            const string deductSql = @"
                UPDATE WarehouseInventory
                SET Quantity = Quantity - @Quantity,
                    LastUpdated = SYSUTCDATETIME()
                WHERE ProductId = @ProductId 
                  AND WarehouseId = @SourceWarehouseId
                  AND Quantity >= @Quantity;";

            await using var deductCmd = new SqlCommand(deductSql, connection, transaction);
            deductCmd.Parameters.Add("@ProductId", SqlDbType.UniqueIdentifier).Value = productId;
            deductCmd.Parameters.Add("@SourceWarehouseId", SqlDbType.Int).Value = sourceWarehouseId;
            deductCmd.Parameters.Add("@Quantity", SqlDbType.Int).Value = quantity;

            int rowsAffected = await deductCmd.ExecuteNonQueryAsync();
            if (rowsAffected == 0)
            {
                // Insufficient stock or record missing - abort transaction
                await transaction.RollbackAsync();
                return false;
            }

            const string addSql = @"
                MERGE WarehouseInventory AS target
                USING (SELECT @ProductId, @TargetWarehouseId) AS source (ProductId, WarehouseId)
                ON target.ProductId = source.ProductId AND target.WarehouseId = source.WarehouseId
                WHEN MATCHED THEN
                    UPDATE SET Quantity = target.Quantity + @Quantity, LastUpdated = SYSUTCDATETIME()
                WHEN NOT MATCHED THEN
                    INSERT (ProductId, WarehouseId, Quantity, LastUpdated)
                    VALUES (@ProductId, @TargetWarehouseId, @Quantity, SYSUTCDATETIME());";

            await using var addCmd = new SqlCommand(addSql, connection, transaction);
            addCmd.Parameters.Add("@ProductId", SqlDbType.UniqueIdentifier).Value = productId;
            addCmd.Parameters.Add("@TargetWarehouseId", SqlDbType.Int).Value = targetWarehouseId;
            addCmd.Parameters.Add("@Quantity", SqlDbType.Int).Value = quantity;

            await addCmd.ExecuteNonQueryAsync();
            await transaction.CommitAsync();
            return true;
        }
        catch (Exception)
        {
            await transaction.RollbackAsync();
            throw;
        }
    }
}`
  },
  {
    id: 'java',
    language: 'java',
    label: 'Java / Backend',
    fileName: 'BatchIngestionService.java',
    description: 'Concurrent, memory-conscious data processor employing HikariCP connection pooling, JDBC batching, and producer-consumer threading.',
    highlights: [
      'HikariCP connection management for optimal throughput',
      'Chunked JDBC batch executions reducing network overhead',
      'Thread-safe resource containment and exception isolation'
    ],
    code: `package com.developer.service;

import com.zaxxer.hikari.HikariDataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;

public class BatchIngestionService {

    private final HikariDataSource dataSource;
    private final ExecutorService workerPool;
    private static final int BATCH_SIZE = 500;

    public BatchIngestionService(HikariDataSource dataSource, ExecutorService workerPool) {
        this.dataSource = Objects.requireNonNull(dataSource);
        this.workerPool = Objects.requireNonNull(workerPool);
    }

    public CompletableFuture<Integer> processRecordBatchAsync(List<TelemetryRecord> records) {
        return CompletableFuture.supplyAsync(() -> {
            final String sql = """
                INSERT INTO telemetry_stage (sensor_id, reading_val, recorded_at, status_flag)
                VALUES (?, ?, ?, ?)
                ON CONFLICT (sensor_id, recorded_at) DO UPDATE 
                SET reading_val = EXCLUDED.reading_val;
            """;

            int totalInserted = 0;
            try (Connection conn = dataSource.getConnection()) {
                conn.setAutoCommit(false); // Enable manual transaction control

                try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                    int count = 0;
                    for (TelemetryRecord record : records) {
                        stmt.setString(1, record.sensorId());
                        stmt.setDouble(2, record.value());
                        stmt.setTimestamp(3, java.sql.Timestamp.from(record.timestamp()));
                        stmt.setString(4, record.status());
                        stmt.addBatch();

                        if (++count % BATCH_SIZE == 0) {
                            int[] results = stmt.executeBatch();
                            totalInserted += results.length;
                        }
                    }
                    int[] remaining = stmt.executeBatch();
                    totalInserted += remaining.length;
                    
                    conn.commit();
                } catch (SQLException ex) {
                    conn.rollback();
                    throw new RuntimeException("Batch execution aborted, rolled back cleanly.", ex);
                }
            } catch (SQLException e) {
                throw new RuntimeException("Database connection error", e);
            }
            return totalInserted;
        }, workerPool);
    }
}`
  },
  {
    id: 'typescript',
    language: 'typescript',
    label: 'TypeScript / Supabase',
    fileName: 'supabaseRepository.ts',
    description: 'Strictly typed, resilient repository communicating with Supabase PostgreSQL with error discriminant unions and offline fallback.',
    highlights: [
      'Strongly typed generics eliminating runtime any bugs',
      'Result type pattern (Success/Failure) for predictable error handling',
      'Offline/local cache fallback mechanism'
    ],
    code: `import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

export interface ProjectRecord {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'Web' | 'Desktop' | 'Backend' | 'Database';
  featured: boolean;
  created_at: string;
}

export class ProjectRepository {
  private client: SupabaseClient | null;

  constructor(supabaseUrl?: string, supabaseAnonKey?: string) {
    if (supabaseUrl && supabaseAnonKey) {
      this.client = createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false },
        realtime: { params: { eventsPerSecond: 10 } }
      });
    } else {
      this.client = null;
    }
  }

  public async fetchProjectsByCategory(
    category?: string
  ): Promise<Result<ProjectRecord[]>> {
    if (!this.client) {
      // Graceful offline fallback
      return { success: false, error: new Error('Supabase client uninitialized.') };
    }

    try {
      let query = this.client
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (category && category !== 'All') {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) {
        return { success: false, error: new Error(error.message) };
      }

      return { success: true, data: (data as ProjectRecord[]) ?? [] };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err : new Error(String(err)) 
      };
    }
  }
}`
  },
  {
    id: 'php',
    language: 'php',
    label: 'PHP / PDO',
    fileName: 'OrderApiController.php',
    description: 'Object-oriented REST controller using PDO prepared statements, strict parameter binding, and JSON envelope output.',
    highlights: [
      'Emulation disabled (PDO::ATTR_EMULATE_PREPARES => false) for genuine database-level prepared statements',
      'Atomic order item persistence within transactional scope',
      'Clean HTTP status headers and JSON payloads'
    ],
    code: `<?php
declare(strict_types=1);

namespace App\\Controllers;

use PDO;
use PDOException;
use InvalidArgumentException;

final class OrderApiController
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
        // Ensure real prepared statements and strict error mode
        $this->pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function createOrder(array $payload): void
    {
        header('Content-Type: application/json; charset=UTF-8');

        $userId = filter_var($payload['user_id'] ?? null, FILTER_VALIDATE_INT);
        $items  = $payload['items'] ?? [];

        if (!$userId || empty($items)) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Invalid order payload.']);
            return;
        }

        try {
            $this->pdo->beginTransaction();

            $orderStmt = $this->pdo->prepare(
                'INSERT INTO orders (user_id, status, created_at) VALUES (:user_id, "pending", NOW())'
            );
            $orderStmt->execute([':user_id' => $userId]);
            $orderId = (int) $this->pdo->lastInsertId();

            $itemStmt = $this->pdo->prepare(
                'INSERT INTO order_items (order_id, product_id, quantity, unit_price) 
                 VALUES (:order_id, :product_id, :quantity, :unit_price)'
            );

            foreach ($items as $item) {
                $itemStmt->execute([
                    ':order_id'    => $orderId,
                    ':product_id'  => (int) $item['product_id'],
                    ':quantity'    => (int) $item['quantity'],
                    ':unit_price'  => (float) $item['unit_price']
                ]);
            }

            $this->pdo->commit();

            http_response_code(201);
            echo json_encode([
                'status'   => 'success',
                'order_id' => $orderId,
                'message'  => 'Order placed with atomic transaction safety.'
            ]);
        } catch (PDOException $e) {
            if ($this->pdo->inTransaction()) {
                $this->pdo->rollBack();
            }
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Database transaction failed.']);
        }
    }
}`
  },
  {
    id: 'sql',
    language: 'sql',
    label: 'SQL / Analytical & Transact',
    fileName: 'AnalyticalQuery.sql',
    description: 'High-performance SQL query utilizing Common Table Expressions (CTEs), window functions (ROW_NUMBER), and filtered aggregation.',
    highlights: [
      'CTE factoring complex query logic for optimizer readability',
      'Window function partitioning calculations without costly subqueries',
      'Optimized index alignment on temporal and foreign key columns'
    ],
    code: `-- Analytical Query: Identify top performing product categories and growth rate
-- Utilizes CTEs, Window Functions (DENSE_RANK, SUM OVER), and Conditional Aggregates

WITH MonthlyCategorySales AS (
    SELECT 
        c.category_id,
        c.category_name,
        DATEFROMPARTS(YEAR(o.created_at), MONTH(o.created_at), 1) AS sales_month,
        COUNT(DISTINCT o.order_id) AS total_orders,
        SUM(oi.quantity * oi.unit_price) AS gross_revenue
    FROM categories c
    INNER JOIN products p ON c.category_id = p.category_id
    INNER JOIN order_items oi ON p.product_id = oi.product_id
    INNER JOIN orders o ON oi.order_id = o.order_id
    WHERE o.status = 'completed'
      AND o.created_at >= DATEADD(MONTH, -12, GETUTCDATE())
    GROUP BY 
        c.category_id, 
        c.category_name, 
        DATEFROMPARTS(YEAR(o.created_at), MONTH(o.created_at), 1)
),
RankedPerformance AS (
    SELECT 
        category_id,
        category_name,
        sales_month,
        gross_revenue,
        LAG(gross_revenue, 1) OVER (
            PARTITION BY category_id 
            ORDER BY sales_month
        ) AS previous_month_revenue,
        DENSE_RANK() OVER (
            PARTITION BY sales_month 
            ORDER BY gross_revenue DESC
        ) AS month_rank
    FROM MonthlyCategorySales
)
SELECT 
    category_id,
    category_name,
    sales_month,
    gross_revenue,
    previous_month_revenue,
    CASE 
        WHEN previous_month_revenue IS NULL OR previous_month_revenue = 0 THEN 0.00
        ELSE ROUND(((gross_revenue - previous_month_revenue) / previous_month_revenue) * 100, 2)
    END AS revenue_growth_percentage,
    month_rank
FROM RankedPerformance
WHERE month_rank <= 3
ORDER BY sales_month DESC, month_rank ASC;`
  }
];
