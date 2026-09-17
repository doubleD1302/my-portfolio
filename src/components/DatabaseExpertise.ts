import { databaseCapabilities } from '../data/databases.data';

export class DatabaseExpertise {
  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section-wrapper';
    section.id = 'databases';

    section.innerHTML = `
      <div class="container-custom">
        <div class="section-header">
          <div class="section-badge">Data Layer Mastery</div>
          <h2 class="section-title">Working With Data</h2>
          <p class="section-subtitle">
            Databases and data storage engines I actively engineer with, emphasizing referential integrity, indexing, ACID transactions, and distributed scalability.
          </p>
        </div>

        <div class="db-cards-grid">
          ${databaseCapabilities.map(db => `
            <div class="db-card">
              <div class="db-card-header">
                <div>
                  <h3 class="db-card-title">${db.name}</h3>
                  <div class="db-card-subtitle">${db.subtitle}</div>
                </div>
                <span class="db-badge">${db.badge}</span>
              </div>

              <p class="db-card-desc">${db.description}</p>

              <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--color-text-primary);">
                Key Engineering Competencies:
              </div>

              <ul class="db-capabilities-list">
                ${db.capabilities.map(cap => `
                  <li class="db-capability-item">
                    <span class="db-check-icon">✓</span>
                    <span>${cap}</span>
                  </li>
                `).join('')}
              </ul>

              <div class="db-architecture-role">
                <strong style="color: var(--color-primary); display: block; margin-bottom: 2px;">Architectural Fit:</strong>
                ${db.architectureRole}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    return section;
  }
}
