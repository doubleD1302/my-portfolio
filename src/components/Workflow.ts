import { portfolioConfig } from '../data/portfolio.config';

export class Workflow {
  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section-wrapper';
    section.id = 'workflow';

    const steps = portfolioConfig.workflow;

    section.innerHTML = `
      <div class="container-custom">
        <div class="section-header">
          <div class="section-badge">Engineering Methodology</div>
          <h2 class="section-title">How I Build Software</h2>
          <p class="section-subtitle">
            A disciplined, step-by-step engineering mindset ensuring every product is reliable, testable, and maintainable from database to user interface.
          </p>
        </div>

        <div class="workflow-grid">
          ${steps.map(step => `
            <div class="workflow-card">
              <div class="workflow-step-num">${step.step}</div>
              <h3 class="workflow-title">${step.title}</h3>
              <p class="workflow-desc">${step.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    return section;
  }
}
