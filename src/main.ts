import './styles/main.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodeShowcase } from './components/CodeShowcase';
import { DatabaseExpertise } from './components/DatabaseExpertise';
import { Timeline } from './components/Timeline';
import { Workflow } from './components/Workflow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AnalyticsService } from './services/analyticsService';

class App {
  public static init(): void {
    const appRoot = document.getElementById('app');
    if (!appRoot) return;

    // background hieu ung nhe
    const ambientBg = document.createElement('div');
    ambientBg.className = 'ambient-background';
    ambientBg.innerHTML = `
      <div class="ambient-grid"></div>
      <div class="ambient-glow-orb-1"></div>
      <div class="ambient-glow-orb-2"></div>
      <div class="ambient-glow-orb-3"></div>
    `;
    document.body.prepend(ambientBg);

    CaseStudyModal.init();

    appRoot.appendChild(Navbar.render());

    const mainContent = document.createElement('main');
    mainContent.id = 'main-content';

    mainContent.appendChild(Hero.render());
    mainContent.appendChild(StatsBar.render());
    mainContent.appendChild(About.render());
    mainContent.appendChild(Skills.render());
    mainContent.appendChild(Projects.render());
    mainContent.appendChild(CodeShowcase.render());
    mainContent.appendChild(DatabaseExpertise.render());
    mainContent.appendChild(Timeline.render());
    mainContent.appendChild(Workflow.render());
    mainContent.appendChild(Contact.render());

    appRoot.appendChild(mainContent);
    appRoot.appendChild(Footer.render());

    this.setupScrollReveal();

    AnalyticsService.trackEvent('page_view', { title: document.title });
  }

  private static setupScrollReveal(): void {
    const elementsToReveal = document.querySelectorAll(
      '.card-modern, .pillar-card, .skill-category-card, .project-card, .db-card, .workflow-card, .timeline-item, .section-header'
    );

    elementsToReveal.forEach(el => el.classList.add('reveal-on-scroll'));

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      elementsToReveal.forEach(el => observer.observe(el));
    } else {
      elementsToReveal.forEach(el => el.classList.add('is-visible'));
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
