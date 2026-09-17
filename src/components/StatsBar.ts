import { portfolioConfig } from '../data/portfolio.config';

export class StatsBar {
  public static render(): HTMLElement {
    const el = document.createElement('section');
    el.className = 'stats-bar-section';
    el.id = 'status-bar';

    const metrics = portfolioConfig.metrics;

    el.innerHTML = `
      <div class="container-custom">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${metrics.projectsBuilt}</div>
            <div class="stat-label">Projects Built</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${metrics.technologiesCount}</div>
            <div class="stat-label">Technologies</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${metrics.databasesCount}</div>
            <div class="stat-label">Databases</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="font-size: 1.5rem; display: flex; align-items: center; justify-content: center; height: 2.25rem;">
              ${metrics.coreFocus}
            </div>
            <div class="stat-label">Primary Focus</div>
          </div>
        </div>
      </div>
    `;

    return el;
  }
}
