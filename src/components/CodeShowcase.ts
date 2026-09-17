import { codeSnippets } from '../data/codeSnippets.data';
import { highlightCode } from '../utils/highlighter';
import { Toast } from './Toast';

export class CodeShowcase {
  private static activeIndex = 0;

  public static render(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section-wrapper';
    section.id = 'code-showcase';

    section.innerHTML = `
      <div class="container-custom">
        <div class="section-header">
          <div class="section-badge">Implementation Quality</div>
          <h2 class="section-title">Behind the Code</h2>
          <p class="section-subtitle">
            Authentic, production-grade snippets illustrating transaction isolation, strict typing, clean OOP service layers, and parameterized queries.
          </p>
        </div>

        <div class="code-showcase-box" id="code-showcase-box">
          <!-- Tabs Header -->
          <div class="code-tabs-header">
            <nav class="code-tabs-nav" id="code-tabs-nav">
              ${codeSnippets.map((snippet, idx) => `
                <button class="code-tab-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                  ${snippet.label}
                </button>
              `).join('')}
            </nav>

            <div class="code-meta-bar">
              <span class="code-filename" id="code-active-filename">${codeSnippets[0].fileName}</span>
              <button class="btn btn-icon btn-ghost btn-sm" id="btn-copy-code" title="Copy code to clipboard">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Editor Body -->
          <div class="code-editor-viewport">
            <pre class="code-pre"><code id="code-content-block"></code></pre>
          </div>

          <!-- Explanation Footer -->
          <div class="code-explanation-bar">
            <div>
              <strong id="code-active-desc" style="display: block; margin-bottom: 0.25rem; font-size: 0.95rem;"></strong>
              <div class="code-highlights-list" id="code-active-highlights"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.setupEditor(section);
    return section;
  }

  private static setupEditor(container: HTMLElement): void {
    const tabs = container.querySelectorAll<HTMLButtonElement>('.code-tab-btn');
    const filenameEl = container.querySelector('#code-active-filename');
    const codeBlock = container.querySelector('#code-content-block');
    const descEl = container.querySelector('#code-active-desc');
    const highlightsEl = container.querySelector('#code-active-highlights');
    const copyBtn = container.querySelector('#btn-copy-code');

    const renderCurrentSnippet = (idx: number) => {
      this.activeIndex = idx;
      const snippet = codeSnippets[idx];

      if (filenameEl) filenameEl.textContent = snippet.fileName;
      if (descEl) descEl.textContent = snippet.description;

      if (highlightsEl) {
        highlightsEl.innerHTML = snippet.highlights.map(h => `
          <span class="code-highlight-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${h}
          </span>
        `).join('');
      }

      if (codeBlock) {
        codeBlock.innerHTML = highlightCode(snippet.code, snippet.language);
      }
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const idx = parseInt(tab.getAttribute('data-index') || '0', 10);
        renderCurrentSnippet(idx);
      });
    });

    copyBtn?.addEventListener('click', () => {
      const code = codeSnippets[this.activeIndex].code;
      navigator.clipboard.writeText(code).then(() => {
        Toast.show('Code copied to clipboard!');
      }).catch(() => {
        Toast.show('Failed to copy code.');
      });
    });

    // Initial render
    renderCurrentSnippet(0);
  }
}
