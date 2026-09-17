import { portfolioConfig } from '../data/portfolio.config';
import { Terminal } from './Terminal';
import { highlightCode } from '../utils/highlighter';

export class Hero {
  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'hero-section';
    section.id = 'home';

    const dev = portfolioConfig.developer;

    const rawCode = `const developer = {
  name: "${dev.name}",
  role: "Full-stack Developer Intern",
  education: "Software Engineering (2027)",
  frontend: ["React", "TypeScript", "Tailwind CSS"],
  backend: ["PHP", "Node.js", "Express.js"],
  databases: ["PostgreSQL / Supabase", "MySQL", "MongoDB"],
  passion: "Turning real problems into practical products"
};`;

    const highlightedCode = highlightCode(rawCode, 'typescript');

    section.innerHTML = `
      <div class="container-custom">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-small-badge">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-success); display: inline-block;"></span>
              Available for Full-stack Developer Intern Roles
            </div>
            
            <p style="font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 0.25rem;">Hello, I'm</p>
            <h1 class="hero-title">${dev.name}</h1>
            
            <div class="hero-role-wrapper">
              <span>I am a</span>
              <span class="hero-rotating-role" id="hero-rotating-role">${dev.titles[0]}</span>
            </div>

            <p class="hero-subheadline">
              ${dev.subheadline}
            </p>

            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary" id="hero-cta-projects">
                <span>View My Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="${dev.resumeUrl}" download="CV_Nguyen_Duc_Dat.pdf" class="btn btn-outline" id="hero-cta-cv">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            <div class="hero-socials">
              <a href="${dev.github}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub Profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a href="${dev.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn Profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a href="mailto:${dev.email}" class="social-link" aria-label="Direct Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div class="hero-visual-wrapper">
            <div class="code-window float-animation">
              <div class="code-window-header">
                <div class="window-dots">
                  <span class="dot dot-red"></span>
                  <span class="dot dot-yellow"></span>
                  <span class="dot dot-green"></span>
                </div>
                <div class="window-title">developer.config.ts</div>
                <div style="width: 32px;"></div>
              </div>
              <div class="code-window-body">
                <pre style="margin: 0;"><code class="language-typescript">${highlightedCode}</code></pre>
              </div>
            </div>

            <div id="hero-terminal-slot"></div>
          </div>
        </div>
      </div>
    `;

    const terminalSlot = section.querySelector('#hero-terminal-slot');
    if (terminalSlot) {
      terminalSlot.appendChild(Terminal.render());
    }

    this.initRoleRotator(section, dev.titles);

    return section;
  }

  private static initRoleRotator(container: HTMLElement, roles: string[]): void {
    const roleEl = container.querySelector('#hero-rotating-role');
    if (!roleEl || roles.length <= 1) return;

    let index = 0;
    setInterval(() => {
      index = (index + 1) % roles.length;
      roleEl.classList.add('fade-out');
      
      setTimeout(() => {
        roleEl.textContent = roles[index];
        roleEl.classList.remove('fade-out');
      }, 200);
    }, 3200);
  }
}
