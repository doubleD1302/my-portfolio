import { portfolioConfig } from '../data/portfolio.config';
import { ThemeToggle } from './ThemeToggle';
import { AnalyticsService } from '../services/analyticsService';

export class Navbar {
  public static render(): HTMLElement {
    const nav = document.createElement('header');
    nav.className = 'site-navbar';
    nav.id = 'navbar';

    const dev = portfolioConfig.developer;
    const initials = dev.name.split(' ').map(n => n[0]).join('').replace(/[\[\]]/g, '') || 'DEV';

    nav.innerHTML = `
      <div class="container-custom navbar-inner">
        <a href="#home" class="navbar-brand" aria-label="Home">
          <div class="brand-icon">${initials}</div>
          <span>${dev.name}</span>
        </a>

        <nav class="navbar-nav-wrapper">
          <ul class="navbar-links" id="nav-links-list">
            <li><a href="#home" class="nav-item-link active" data-section="home">Home</a></li>
            <li><a href="#about" class="nav-item-link" data-section="about">About</a></li>
            <li><a href="#skills" class="nav-item-link" data-section="skills">Skills</a></li>
            <li><a href="#projects" class="nav-item-link" data-section="projects">Projects</a></li>
            <li><a href="#experience" class="nav-item-link" data-section="experience">Experience</a></li>
            <li><a href="#contact" class="nav-item-link" data-section="contact">Contact</a></li>
          </ul>
        </nav>

        <div class="navbar-actions">
          <a href="${dev.github}" target="_blank" rel="noopener noreferrer" class="btn btn-icon btn-ghost" aria-label="GitHub Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a href="${dev.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-icon btn-ghost" aria-label="LinkedIn Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a href="${dev.resumeUrl}" download class="btn btn-outline btn-sm" id="nav-download-cv" aria-label="Download CV">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>CV</span>
          </a>

          <div id="navbar-theme-container"></div>

          <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle Navigation Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" id="mobile-drawer">
        <ul class="mobile-drawer-links">
          <li><a href="#home" class="mobile-nav-link active" data-section="home">Home</a></li>
          <li><a href="#about" class="mobile-nav-link" data-section="about">About</a></li>
          <li><a href="#skills" class="mobile-nav-link" data-section="skills">Skills</a></li>
          <li><a href="#projects" class="mobile-nav-link" data-section="projects">Projects</a></li>
          <li><a href="#experience" class="mobile-nav-link" data-section="experience">Experience</a></li>
          <li><a href="#contact" class="mobile-nav-link" data-section="contact">Contact</a></li>
        </ul>
        <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-direction: column;">
          <a href="${dev.resumeUrl}" download class="btn btn-primary" style="width: 100%;">Download CV</a>
        </div>
      </div>
    `;

    // Attach Theme Toggle
    const themeSlot = nav.querySelector('#navbar-theme-container');
    if (themeSlot) {
      themeSlot.appendChild(ThemeToggle.render());
    }

    // Initialize Scroll and Drawer Listeners
    this.setupInteractions(nav);

    return nav;
  }

  private static setupInteractions(nav: HTMLElement): void {
    const mobileBtn = nav.querySelector<HTMLButtonElement>('#mobile-menu-btn');
    const drawer = nav.querySelector<HTMLElement>('#mobile-drawer');
    const links = nav.querySelectorAll<HTMLAnchorElement>('.nav-item-link, .mobile-nav-link');

    // Scroll state
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      Navbar.updateScrollSpy();
    });

    // Mobile Drawer Toggle
    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.contains('open');
        drawer.classList.toggle('open', !isOpen);
        mobileBtn.setAttribute('aria-expanded', String(!isOpen));
      });
    }

    // Close drawer on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (drawer) drawer.classList.remove('open');
      });
    });

    // Track CV download
    const cvBtn = nav.querySelector('#nav-download-cv');
    cvBtn?.addEventListener('click', () => {
      AnalyticsService.trackEvent('cv_download_clicked', { source: 'navbar' });
    });
  }

  public static updateScrollSpy(): void {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const scrollPosition = window.scrollY + 120;

    let currentSection = 'home';
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSection = sec.id;
      }
    });

    document.querySelectorAll<HTMLAnchorElement>('.nav-item-link, .mobile-nav-link').forEach(link => {
      const section = link.getAttribute('data-section');
      if (section === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
