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
            <button class="modal-close-btn" id="modal-close-btn" aria-label="Đóng cửa sổ">
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
    if (badgeEl) badgeEl.textContent = `${project.category} Project • Case Study Chi Tiết`;

    if (bodyEl) {
      const cs = project.caseStudy;
      const arch = project.architecture;

      bodyEl.innerHTML = `
        <!-- 1. Tổng quan -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Tổng Quan Dự Án (Project Overview)
          </h3>
          <p style="color: var(--color-text-secondary); line-height: 1.7;">${cs?.overview || project.description}</p>
        </div>

        <!-- 2. Bài toán & Giải pháp -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div class="case-study-section" style="background: rgba(239, 68, 68, 0.05); padding: 1.25rem; border-radius: 8px; border-left: 3px solid #ef4444;">
            <h4 style="color: #ef4444; margin-bottom: 0.5rem; font-size: 1.05rem; display: flex; align-items: center; gap: 0.4rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Bài Toán Thực Tế (The Problem)
            </h4>
            <p style="font-size: 0.92rem; color: var(--color-text-secondary); line-height: 1.6;">${cs?.problem || ''}</p>
          </div>

          <div class="case-study-section" style="background: rgba(16, 185, 129, 0.05); padding: 1.25rem; border-radius: 8px; border-left: 3px solid #10b981;">
            <h4 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.05rem; display: flex; align-items: center; gap: 0.4rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Giải Pháp Triển Khai (The Solution)
            </h4>
            <p style="font-size: 0.92rem; color: var(--color-text-secondary); line-height: 1.6;">${cs?.solution || ''}</p>
          </div>
        </div>

        <!-- 3. Vai trò thực tế -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Vai Trò & Đóng Góp Thực Tế (My Role & Responsibilities)
          </h3>
          <p style="color: var(--color-text-secondary); line-height: 1.7;">${cs?.myRole || ''}</p>
        </div>

        <!-- 4. Kiến trúc hệ thống & Luồng dữ liệu -->
        ${arch ? `
          <div class="case-study-section">
            <h3 class="case-study-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              Kiến Trúc Kỹ Thuật & Luồng Dữ Liệu (Architecture & Flow)
            </h3>
            <div class="case-arch-box">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <span style="color: var(--color-primary); font-weight: 700;">Giao diện (Frontend / Client):</span>
                  <div style="color: var(--color-text-secondary); margin-top: 3px;">${arch.client}</div>
                </div>
                <div>
                  <span style="color: var(--color-primary); font-weight: 700;">Nghiệp vụ (Application / Server):</span>
                  <div style="color: var(--color-text-secondary); margin-top: 3px;">${arch.application}</div>
                </div>
                <div>
                  <span style="color: var(--color-primary); font-weight: 700;">Tầng dữ liệu (Data Access / API):</span>
                  <div style="color: var(--color-text-secondary); margin-top: 3px;">${arch.dataLayer}</div>
                </div>
                <div>
                  <span style="color: var(--color-primary); font-weight: 700;">Cơ sở dữ liệu (Database / Storage):</span>
                  <div style="color: var(--color-text-secondary); margin-top: 3px;">${arch.database}</div>
                </div>
              </div>
              <hr style="border: none; border-top: 1px solid var(--color-border-subtle); margin: 0.75rem 0;">
              <strong style="color: var(--color-text-primary);">Luồng luân chuyển dữ liệu thực tế (Execution Flow):</strong>
              <ol style="padding-left: 1.5rem; margin-top: 0.5rem; color: var(--color-text-secondary); line-height: 1.7;">
                ${arch.diagramSteps.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          </div>
        ` : ''}

        <!-- 5. Thiết kế cơ sở dữ liệu -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            Thiết Kế Cơ Sở Dữ Liệu (Database Design)
          </h3>
          <p style="color: var(--color-text-secondary); line-height: 1.7;">${cs?.databaseDesign || ''}</p>
        </div>

        <!-- 6. Tính năng cốt lõi -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            Tính Năng Cốt Lõi (Key Features)
          </h3>
          <ul class="case-feature-list">
            ${(cs?.keyFeatures || []).map(feat => `<li>${feat}</li>`).join('')}
          </ul>
        </div>

        <!-- 7. Khó khăn thực tế & Cách giải quyết -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            Khó Khăn Thực Tế & Cách Giải Quyết (Challenges & Solutions)
          </h3>
          <ul class="case-feature-list">
            ${(cs?.challenges || []).map(ch => `<li>${ch}</li>`).join('')}
          </ul>
        </div>

        <!-- 8. Bài học kinh nghiệm -->
        <div class="case-study-section">
          <h3 class="case-study-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Bài Học & Kinh Nghiệm Rút Ra (Key Learnings)
          </h3>
          <ul class="case-feature-list">
            ${(cs?.whatILearned || []).map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <!-- Links -->
        <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border-subtle); flex-wrap: wrap;">
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>Xem Repository trên GitHub</span>
            </a>
          ` : ''}

          ${project.id === 'pos-ga' ? `
            <span style="font-size: 0.82rem; color: var(--color-text-muted); font-style: italic;">
              * Dự án độc lập — Private Repository (Sẵn sàng demo trực tiếp source code khi phỏng vấn)
            </span>
          ` : ''}

          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>Xem Demo Trực Tiếp</span>
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
