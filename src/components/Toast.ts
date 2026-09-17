export class Toast {
  private static container: HTMLElement | null = null;

  private static ensureContainer(): HTMLElement {
    if (!this.container) {
      let el = document.getElementById('toast-container');
      if (!el) {
        el = document.createElement('div');
        el.id = 'toast-container';
        el.className = 'toast-container';
        document.body.appendChild(el);
      }
      this.container = el;
    }
    return this.container;
  }

  public static show(message: string, duration = 4000): void {
    const container = this.ensureContainer();
    const item = document.createElement('div');
    item.className = 'toast-item';
    item.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(item);

    setTimeout(() => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(50px)';
      item.style.transition = 'all 0.3s ease';
      setTimeout(() => item.remove(), 300);
    }, duration);
  }
}
