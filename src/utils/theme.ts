export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio_theme';

class ThemeManager {
  private currentTheme: Theme = 'dark';
  private listeners: Array<(theme: Theme) => void> = [];

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      this.currentTheme = saved;
    } else {
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      this.currentTheme = prefersLight ? 'light' : 'dark';
    }

    this.applyTheme(this.currentTheme);

    // doi theo theme he thong neu chua luu
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          this.setTheme(e.matches ? 'light' : 'dark', false);
        }
      });
    }
  }

  public getTheme(): Theme {
    return this.currentTheme;
  }

  public setTheme(theme: Theme, persist = true): void {
    this.currentTheme = theme;
    if (persist) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    this.applyTheme(theme);
    this.notify();
  }

  public toggle(): Theme {
    const next = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(next, true);
    return next;
  }

  public subscribe(cb: (theme: Theme) => void): () => void {
    this.listeners.push(cb);
    cb(this.currentTheme);
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  private transitionTimer: number | null = null;

  private applyTheme(theme: Theme): void {
    // Add smooth transition class temporarily
    document.documentElement.classList.add('theme-transitioning');
    if (this.transitionTimer) {
      window.clearTimeout(this.transitionTimer);
    }
    this.transitionTimer = window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 450);

    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }

  private notify(): void {
    this.listeners.forEach(cb => cb(this.currentTheme));
  }
}

export const themeManager = new ThemeManager();
