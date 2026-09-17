import { portfolioConfig } from '../data/portfolio.config';
import { ContactService } from '../services/contactService';
import { Toast } from './Toast';

export class Contact {
  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section-wrapper';
    section.id = 'contact';

    const dev = portfolioConfig.developer;

    section.innerHTML = `
      <div class="container-custom">
        <div class="section-header">
          <div class="section-badge">Get in Touch</div>
          <h2 class="section-title">Let’s Build Something Together.</h2>
          <p class="section-subtitle">
            Have an open software development position, a collaborative database project, or an engineering inquiry? Drop me a message below.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Left Info Card -->
          <div class="contact-info-card">
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Contact Information</h3>
            <p style="color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
              I am open to software development opportunities, backend and full-stack positions, or database engineering challenges.
            </p>

            <div class="contact-direct-item">
              <div class="contact-direct-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <div style="font-size: 0.82rem; color: var(--color-text-muted); text-transform: uppercase; font-weight: 600;">Email</div>
                <a href="mailto:${dev.email}" style="font-weight: 600;">${dev.email}</a>
              </div>
            </div>

            <div class="contact-direct-item">
              <div class="contact-direct-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <div style="font-size: 0.82rem; color: var(--color-text-muted); text-transform: uppercase; font-weight: 600;">Location</div>
                <div style="font-weight: 600; color: var(--color-text-primary);">${dev.location}</div>
              </div>
            </div>

            <div class="contact-direct-item">
              <div class="contact-direct-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div>
                <div style="font-size: 0.82rem; color: var(--color-text-muted); text-transform: uppercase; font-weight: 600;">GitHub</div>
                <a href="${dev.github}" target="_blank" rel="noopener noreferrer" style="font-weight: 600;">${dev.github.replace('https://', '')}</a>
              </div>
            </div>

            <div class="contact-direct-item">
              <div class="contact-direct-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <div style="font-size: 0.82rem; color: var(--color-text-muted); text-transform: uppercase; font-weight: 600;">LinkedIn</div>
                <a href="${dev.linkedin}" target="_blank" rel="noopener noreferrer" style="font-weight: 600;">${dev.linkedin.replace('https://', '')}</a>
              </div>
            </div>
          </div>

          <!-- Right Form Card -->
          <div class="contact-form-card">
            <form id="contact-form" novalidate>
              <div class="form-group">
                <label for="contact-name" class="form-label">Full Name *</label>
                <input type="text" id="contact-name" name="name" class="form-control" placeholder="e.g. Alex Johnson" required />
              </div>

              <div class="form-group">
                <label for="contact-email" class="form-label">Email Address *</label>
                <input type="email" id="contact-email" name="email" class="form-control" placeholder="e.g. alex@example.com" required />
              </div>

              <div class="form-group">
                <label for="contact-subject" class="form-label">Subject *</label>
                <input type="text" id="contact-subject" name="subject" class="form-control" placeholder="e.g. Software Developer Opportunity" required />
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">Message *</label>
                <textarea id="contact-message" name="message" class="form-control form-textarea" placeholder="Describe the opportunity or project..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary" id="btn-submit-contact" style="width: 100%;">
                <span id="btn-submit-text">Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              <div id="contact-feedback" class="form-feedback" role="alert"></div>
            </form>
          </div>
        </div>
      </div>
    `;

    this.setupForm(section);
    return section;
  }

  private static setupForm(container: HTMLElement): void {
    const form = container.querySelector<HTMLFormElement>('#contact-form');
    const submitBtn = container.querySelector<HTMLButtonElement>('#btn-submit-contact');
    const submitText = container.querySelector<HTMLSpanElement>('#btn-submit-text');
    const feedback = container.querySelector<HTMLElement>('#contact-feedback');

    if (!form || !submitBtn || !feedback) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = form.querySelector<HTMLInputElement>('#contact-name');
      const emailInput = form.querySelector<HTMLInputElement>('#contact-email');
      const subjectInput = form.querySelector<HTMLInputElement>('#contact-subject');
      const messageInput = form.querySelector<HTMLTextAreaElement>('#contact-message');

      const name = nameInput?.value || '';
      const email = emailInput?.value || '';
      const subject = subjectInput?.value || '';
      const message = messageInput?.value || '';

      // Reset feedback
      feedback.className = 'form-feedback';
      feedback.style.display = 'none';

      // Set Loading state
      submitBtn.disabled = true;
      if (submitText) submitText.textContent = 'Sending...';

      const result = await ContactService.submitMessage({
        name,
        email,
        subject,
        message
      });

      submitBtn.disabled = false;
      if (submitText) submitText.textContent = 'Send Message';

      if (result.success) {
        feedback.className = 'form-feedback success';
        feedback.textContent = result.message;
        feedback.style.display = 'block';
        Toast.show('Message sent successfully!');
        form.reset();
      } else {
        feedback.className = 'form-feedback error';
        feedback.textContent = result.message;
        feedback.style.display = 'block';
      }
    });
  }
}
