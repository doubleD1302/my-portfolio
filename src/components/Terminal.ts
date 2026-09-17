export class Terminal {
  public static render(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'terminal-interactive';
    el.id = 'hero-terminal';

    el.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
        <span style="color: var(--color-text-muted); font-size: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          bash — terminal
        </span>
        <div style="display: flex; gap: 0.35rem;">
          <button class="terminal-cmd-pill" data-cmd="whoami" style="background: rgba(255,255,255,0.05); border: 1px solid var(--color-border-subtle); border-radius: 4px; padding: 2px 8px; font-size: 0.72rem; color: var(--color-text-secondary); cursor: pointer;">whoami</button>
          <button class="terminal-cmd-pill" data-cmd="database" style="background: rgba(255,255,255,0.05); border: 1px solid var(--color-border-subtle); border-radius: 4px; padding: 2px 8px; font-size: 0.72rem; color: var(--color-text-secondary); cursor: pointer;">--database</button>
          <button class="terminal-cmd-pill" data-cmd="languages" style="background: rgba(255,255,255,0.05); border: 1px solid var(--color-border-subtle); border-radius: 4px; padding: 2px 8px; font-size: 0.72rem; color: var(--color-text-secondary); cursor: pointer;">--languages</button>
        </div>
      </div>
      <div id="terminal-content">
        <div class="terminal-line">
          <span class="terminal-prompt">$</span>
          <span class="terminal-cmd">whoami</span>
        </div>
        <div class="terminal-response">Software Developer / Full-stack Developer</div>

        <div class="terminal-line">
          <span class="terminal-prompt">$</span>
          <span class="terminal-cmd">skills --database</span>
        </div>
        <div class="terminal-response">SQL Server  •  MySQL  •  TiDB Cloud  •  Supabase  •  Firebase</div>

        <div class="terminal-line">
          <span class="terminal-prompt">$</span>
          <span class="terminal-cmd">skills --languages</span>
        </div>
        <div class="terminal-response">C#  •  Java  •  C++  •  TypeScript  •  PHP  •  SQL</div>
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
          respText = 'Software Developer / Full-stack Developer (Ready to build practical products)';
        } else if (cmd === 'database') {
          cmdText = 'skills --database';
          respText = 'SQL Server (ADO.NET)  •  MySQL (InnoDB/PDO)  •  TiDB Cloud (Distributed SQL)  •  Supabase (PostgreSQL/RLS)';
        } else if (cmd === 'languages') {
          cmdText = 'skills --languages';
          respText = 'C# (.NET)  •  Java (Core/JDBC)  •  C++ (Systems)  •  TypeScript (Strict)  •  PHP (PDO)  •  SQL';
        }

        const newBlock = document.createElement('div');
        newBlock.innerHTML = `
          <div class="terminal-line" style="margin-top: 0.5rem;">
            <span class="terminal-prompt">$</span>
            <span class="terminal-cmd">${cmdText}</span>
          </div>
          <div class="terminal-response" style="color: var(--color-primary);">${respText}</div>
        `;
        content.appendChild(newBlock);
        content.scrollTop = content.scrollHeight;
      });
    });

    return el;
  }
}
