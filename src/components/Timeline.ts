import { timelineData } from '../data/timeline.data';

export class Timeline {
  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section-wrapper';
    section.id = 'experience';

    section.innerHTML = `
      <div class="container-custom">
        <div class="section-header">
          <div class="section-badge">Development Journey</div>
          <h2 class="section-title">Development Journey</h2>
          <p class="section-subtitle">
            Practical application engineering combined with an academic foundation in Software Engineering.
          </p>
        </div>

        <div class="timeline-container">
          ${timelineData.map(entry => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content-card">
                <div class="timeline-period">${entry.period}</div>
                <h3 class="timeline-title">${entry.title}</h3>
                <div class="timeline-org">${entry.organization}</div>
                <p class="timeline-desc">${entry.description}</p>

                <div class="timeline-techs">
                  ${entry.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    return section;
  }
}
