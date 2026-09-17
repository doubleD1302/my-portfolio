import { Project } from '../types';

export class CaseStudyModal {
  private static modalEl: HTMLElement | null = null;

  public static init(): HTMLElement {
    if (!this.modalEl) {
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      overlay.id = 'case-study-modal';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-hidden', 'true');

      overlay.innerHTML = `
        <div class="modal-container">
          <div class="modal-header">
            <div>
              <div id="modal-category-badge" class="section-badge" style="margin-bottom: 0.25rem;"></div>
              <h2 id="modal-title" class="modal-title"></h2>
            </div>
            <button class="modal-close-btn" id="modal-close-btn" aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="modal-content-body" id="modal-body-content">
            <!-- Dynamic case study content injected here -->
          </div>
        </div>
      `;

      // Close events
      const closeBtn = overlay.querySelector('#modal-close-btn');
      closeBtn?.addEventListener('click', () => this.close());

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.close();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
          this.close();
        }
      });

      document.body.appendChild(overlay);
      this.modalEl = overlay;
    }

    return this.modalEl;
  }

  public static open(project: Project): void {
    const modal = this.init();
    const titleEl = modal.querySelector('#modal-title');
    const badgeEl = modal.querySelector('#modal-category-badge');
    const bodyEl = modal.querySelector('#modal-body-content');

    if (titleEl) titleEl.textContent = project.title;
    if (badgeEl) badgeEl.textContent = `${project.category} Project • Case Study`;

    if (bodyEl) {
      const cs = project.caseStudy;
      const arch = project.architecture;

      bodyEl.innerHTML = `
        <!-- Overview -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Project Overview
          </h3>
          <p>${cs?.overview || project.description}</p>
        </div>

        <!-- Problem & Solution -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div class="case-study-section" style="background: rgba(239, 68, 68, 0.05); padding: 1.25rem; border-radius: 8px; border-left: 3px solid #ef4444;">
            <h4 style="color: #ef4444; margin-bottom: 0.5rem; font-size: 1.05rem;">The Challenge / Problem</h4>
            <p style="font-size: 0.92rem;">${cs?.problem || 'Addressing complex transactional requirements and data consistency.'}</p>
          </div>

          <div class="case-study-section" style="background: rgba(16, 185, 129, 0.05); padding: 1.25rem; border-radius: 8px; border-left: 3px solid #10b981;">
            <h4 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.05rem;">Engineered Solution</h4>
            <p style="font-size: 0.92rem;">${cs?.solution || 'Designed layered software modules with strict parameterization and validation.'}</p>
          </div>
        </div>

        <!-- My Role -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            My Engineering Role
          </h3>
          <p>${cs?.myRole || 'Full software design, database modeling, and code implementation.'}</p>
        </div>

        <!-- System Architecture & Flow Diagram -->
        ${arch ? `
          <div class="case-study-section">
            <h3 class="case-study-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              Layered System Architecture
            </h3>
            <div class="case-arch-box">
              <div style="margin-bottom: 0.75rem;">
                <span style="color: var(--color-primary); font-weight: 700;">[Presentation]</span> ${arch.client}<br>
                <span style="color: var(--color-secondary); font-weight: 700; margin-left: 1.5rem;">↓</span><br>
                <span style="color: var(--color-primary); font-weight: 700;">[Business Logic]</span> ${arch.application}<br>
                <span style="color: var(--color-secondary); font-weight: 700; margin-left: 1.5rem;">↓</span><br>
                <span style="color: var(--color-primary); font-weight: 700;">[Data Access]</span> ${arch.dataLayer}<br>
                <span style="color: var(--color-secondary); font-weight: 700; margin-left: 1.5rem;">↓</span><br>
                <span style="color: var(--color-primary); font-weight: 700;">[Database Engine]</span> ${arch.database}
              </div>
              <hr style="border: none; border-top: 1px solid var(--color-border-subtle); margin: 0.75rem 0;">
              <strong style="color: var(--color-text-primary);">Execution Flow:</strong>
              <ol style="padding-left: 1.5rem; margin-top: 0.5rem; color: var(--color-text-secondary);">
                ${arch.diagramSteps.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          </div>
        ` : ''}

        <!-- Database Design -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            Database Design & Data Access Mechanics
          </h3>
          <p>${cs?.databaseDesign || 'Normalized relational schema with indexing on foreign keys.'}</p>
        </div>

        <!-- Key Features -->
        <div class="case-study-section">
          <h3 class="case-study-heading">Key Features</h3>
          <ul class="case-feature-list">
            ${(cs?.keyFeatures || []).map(feat => `<li>${feat}</li>`).join('')}
          </ul>
        </div>

        <!-- Technical Challenges & Mitigations -->
        <div class="case-study-section">
          <h3 class="case-study-heading">Engineering Challenges Overcome</h3>
          <ul class="case-feature-list">
            ${(cs?.challenges || []).map(ch => `<li>${ch}</li>`).join('')}
          </ul>
        </div>

        <!-- What I Learned -->
        <div class="case-study-section">
          <h3 class="case-study-heading">Takeaways & Key Learnings</h3>
          <ul class="case-feature-list">
            ${(cs?.whatILearned || []).map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <!-- Links -->
        <div style="display: flex; gap: 1rem; margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border-subtle); flex-wrap: wrap;">
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>Inspect Source Repository</span>
            </a>
          ` : ''}

          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>Live Demonstration</span>
            </a>
          ` : ''}
        </div>
      `;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  public static close(): void {
    if (this.modalEl) {
      this.modalEl.classList.remove('open');
      this.modalEl.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
}
