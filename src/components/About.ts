import { portfolioConfig } from '../data/portfolio.config';

export class About {
  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section-wrapper';
    section.id = 'about';

    const dev = portfolioConfig.developer;
    const pillars = portfolioConfig.pillars;

    section.innerHTML = `
      <div class="container-custom">
        <div class="about-grid">
          <div class="about-visual-card">
            <div class="about-avatar-wrapper" style="overflow: hidden; padding: 0;">
              ${dev.avatarUrl ? `
                <img src="${dev.avatarUrl}" alt="${dev.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: 38% 15%; border-radius: 50%;" />
              ` : `
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                  <path d="M7 8l3 3-3 3"></path>
                  <line x1="13" y1="14" x2="17" y2="14"></line>
                </svg>
              `}
            </div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">${dev.name}</h3>
            <p style="font-size: 0.95rem; color: var(--color-primary); font-weight: 600; margin-bottom: 1rem;">
              ${dev.headline}
            </p>
            <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
              <span class="badge" style="background: var(--color-bg-tertiary); border: 1px solid var(--color-border-subtle); color: var(--color-text-secondary); padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-family: var(--font-mono);">React</span>
              <span class="badge" style="background: var(--color-bg-tertiary); border: 1px solid var(--color-border-subtle); color: var(--color-text-secondary); padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-family: var(--font-mono);">TypeScript</span>
              <span class="badge" style="background: var(--color-bg-tertiary); border: 1px solid var(--color-border-subtle); color: var(--color-text-secondary); padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-family: var(--font-mono);">PHP / MySQL</span>
              <span class="badge" style="background: var(--color-bg-tertiary); border: 1px solid var(--color-border-subtle); color: var(--color-text-secondary); padding: 4px 10px; border-radius: 4px; font-size: 0.78rem; font-family: var(--font-mono);">Node.js / Mongo</span>
            </div>
          </div>

          <div class="about-content">
            <div class="section-badge">Full-stack Developer Intern</div>
            <h2 class="section-title">About Me</h2>
            
            <p style="font-size: 1.08rem; color: var(--color-text-primary); margin-bottom: 1rem; line-height: 1.7;">
              I’m a Software Engineering student focused on Full-stack Development, with hands-on experience building practical web applications, POS systems, and database-driven software.
            </p>

            <p style="font-size: 1.05rem; color: var(--color-text-secondary); margin-bottom: 1rem; line-height: 1.7;">
              I enjoy turning real-world problems into working products — from designing user interfaces and business logic to structuring databases and deploying applications.
            </p>

            <p style="font-size: 1.05rem; color: var(--color-text-secondary); margin-bottom: 1.75rem; line-height: 1.7;">
              Through projects using React, TypeScript, PHP, Node.js, Supabase, MySQL, and MongoDB, I’ve developed a strong interest in building software that is reliable, maintainable, and useful in practice.
            </p>

            <div class="about-pillar-cards">
              ${pillars.map(p => `
                <div class="pillar-card">
                  <div class="pillar-num">${p.number}</div>
                  <h4 class="pillar-title">${p.title}</h4>
                  <p class="pillar-desc">${p.description}</p>
                </div>
              `).join('')}
            </div>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="#contact" class="btn btn-primary">
                <span>Let's Connect</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="${dev.resumeUrl}" download="CV_Nguyen_Duc_Dat.pdf" class="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    return section;
  }
}
