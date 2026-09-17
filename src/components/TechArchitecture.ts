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
            <strong>React 19 • TypeScript • Tailwind CSS</strong><br>
            HTML5 / CSS3 • Bootstrap 5
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
            <h4 class="arch-node-title">Backend & Logic</h4>
          </div>
          <div class="arch-node-techs">
            <strong>PHP 8.2 (MVC) • Node.js • Express.js</strong><br>
            C# (.NET) • Java • C++
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
            <strong>Supabase JS • PDO Prepared</strong><br>
            Mongoose ODM • IndexedDB Cache
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
            <h4 class="arch-node-title">Database Storage</h4>
          </div>
          <div class="arch-node-techs">
            <strong>PostgreSQL • MySQL • MongoDB</strong><br>
            SQL Server (ACID & Stored Procs)
          </div>
          <div class="arch-node-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 5. Cloud Services & DevOps -->
        <div class="arch-node">
          <div>
            <div class="arch-node-badge">Layer 05</div>
            <h4 class="arch-node-title">DevOps & Services</h4>
          </div>
          <div class="arch-node-techs">
            <strong>VietQR Dynamic • Docker • Linux</strong><br>
            Apache • Vercel • Render
          </div>
        </div>
      </div>
    `;

    return el;
  }
}
