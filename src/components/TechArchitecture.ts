export class TechArchitecture {
  public static render(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'arch-viz-card';
    el.id = 'architecture-flow';

    el.innerHTML = `
      <div style="text-align: center; max-width: 720px; margin: 0 auto var(--space-xl);">
        <div class="section-badge" style="margin-bottom: 0.5rem;">System Architecture</div>
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Full-Stack Architectural Alignment</h3>
        <p style="font-size: 0.95rem; color: var(--color-text-secondary);">
          Demonstrating how each technology in my stack functions within decoupled, maintainable software layers rather than isolated tools.
        </p>
      </div>

      <div class="arch-flow-diagram">
        <!-- 1. Frontend -->
        <div class="arch-node">
          <div>
            <div class="arch-node-badge">Layer 01</div>
            <h4 class="arch-node-title">Presentation & UI</h4>
          </div>
          <div class="arch-node-techs">
            <strong>HTML5 • CSS3 • TypeScript</strong><br>
            Bootstrap 5 • WinForms UI
          </div>
          <div class="arch-node-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 2. Backend -->
        <div class="arch-node">
          <div>
            <div class="arch-node-badge">Layer 02</div>
            <h4 class="arch-node-title">Business Logic (BLL)</h4>
          </div>
          <div class="arch-node-techs">
            <strong>C# (.NET) • Java • PHP</strong><br>
            C++ (Algorithms/Systems)
          </div>
          <div class="arch-node-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 3. Data Access Layer -->
        <div class="arch-node">
          <div>
            <div class="arch-node-badge">Layer 03</div>
            <h4 class="arch-node-title">Data Access (DAL)</h4>
          </div>
          <div class="arch-node-techs">
            <strong>ADO.NET • PDO Prepared</strong><br>
            JDBC Batching • PostgREST
          </div>
          <div class="arch-node-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 4. Databases -->
        <div class="arch-node">
          <div>
            <div class="arch-node-badge">Layer 04</div>
            <h4 class="arch-node-title">Database Persistence</h4>
          </div>
          <div class="arch-node-techs">
            <strong>SQL Server • MySQL</strong><br>
            TiDB Cloud (Distributed SQL)
          </div>
          <div class="arch-node-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 5. Cloud Services -->
        <div class="arch-node">
          <div>
            <div class="arch-node-badge">Layer 05</div>
            <h4 class="arch-node-title">Cloud & Realtime</h4>
          </div>
          <div class="arch-node-techs">
            <strong>Supabase (PostgreSQL/RLS)</strong><br>
            Firebase (Firestore/Auth)
          </div>
        </div>
      </div>
    `;

    return el;
  }
}
