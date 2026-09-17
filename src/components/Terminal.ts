export class Terminal {
  public static render(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'terminal-interactive';
    el.id = 'hero-terminal';

    el.innerHTML = `
      <div class="terminal-header">
        <span class="terminal-header-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          bash — terminal
        </span>
        <div class="terminal-header-pills">
          <button class="terminal-cmd-pill" data-cmd="whoami">whoami</button>
          <button class="terminal-cmd-pill" data-cmd="database">--database</button>
          <button class="terminal-cmd-pill" data-cmd="languages">--languages</button>
        </div>
      </div>
      <div id="terminal-content">
        <div class="terminal-line">
          <span class="terminal-prompt">$</span>
          <span class="terminal-cmd">whoami</span>
        </div>
        <div class="terminal-response">Software Engineering Student / Full-stack Developer Intern</div>

        <div class="terminal-line">
          <span class="terminal-prompt">$</span>
          <span class="terminal-cmd">skills --database</span>
        </div>
        <div class="terminal-response">PostgreSQL (Supabase)  •  MySQL  •  MongoDB  •  SQL Server</div>

        <div class="terminal-line">
          <span class="terminal-prompt">$</span>
          <span class="terminal-cmd">skills --languages</span>
        </div>
        <div class="terminal-response">TypeScript  •  JavaScript  •  PHP  •  C#  •  Java  •  C/C++  •  SQL</div>
      </div>
    `;

    // Interactive button triggers
    const buttons = el.querySelectorAll<HTMLButtonElement>('.terminal-cmd-pill');
    const content = el.querySelector('#terminal-content');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (!content) return;

        let cmdText = '';
        let respText = '';

        if (cmd === 'whoami') {
          cmdText = 'whoami';
          respText = 'Software Engineering Student / Full-stack Developer Intern (Available for 2025/2026 roles)';
        } else if (cmd === 'database') {
          cmdText = 'skills --database';
          respText = 'PostgreSQL / Supabase (RLS & Edge)  •  MySQL (InnoDB & PDO)  •  MongoDB  •  SQL Server';
        } else if (cmd === 'languages') {
          cmdText = 'skills --languages';
          respText = 'TypeScript (Strict)  •  JavaScript (ES6+)  •  PHP 8.2  •  C# (.NET)  •  Java  •  C/C++  •  SQL';
        }

        const newBlock = document.createElement('div');
        newBlock.innerHTML = `
          <div class="terminal-line" style="margin-top: 0.5rem;">
            <span class="terminal-prompt">$</span>
            <span class="terminal-cmd">${cmdText}</span>
          </div>
          <div class="terminal-response" style="color: #38bdf8;">${respText}</div>
        `;
        content.appendChild(newBlock);
        content.scrollTop = content.scrollHeight;
      });
    });

    return el;
  }
}
