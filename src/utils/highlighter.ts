import { escapeHtml } from './dom';

export function highlightCode(code: string, language: string): string {
  const safe = escapeHtml(code);

  const keywordsMap: Record<string, string[]> = {
    csharp: [
      'using', 'namespace', 'public', 'private', 'protected', 'internal', 'class', 'interface',
      'struct', 'async', 'await', 'Task', 'void', 'int', 'string', 'bool', 'Guid', 'var', 'new',
      'return', 'try', 'catch', 'finally', 'throw', 'if', 'else', 'foreach', 'while', 'static',
      'readonly', 'override', 'null', 'true', 'false', 'nameof'
    ],
    java: [
      'package', 'import', 'public', 'private', 'protected', 'class', 'interface', 'implements',
      'extends', 'void', 'int', 'double', 'boolean', 'return', 'try', 'catch', 'finally',
      'throw', 'new', 'if', 'else', 'for', 'while', 'static', 'final', 'record', 'null', 'true', 'false'
    ],
    typescript: [
      'import', 'export', 'from', 'const', 'let', 'var', 'function', 'return', 'interface',
      'type', 'class', 'implements', 'extends', 'async', 'await', 'try', 'catch', 'finally',
      'throw', 'if', 'else', 'new', 'null', 'undefined', 'true', 'false', 'string', 'number',
      'boolean', 'Promise', 'as', 'default'
    ],
    php: [
      'declare', 'namespace', 'use', 'final', 'class', 'private', 'public', 'protected',
      'function', 'void', 'int', 'float', 'string', 'bool', 'array', 'return', 'try',
      'catch', 'throw', 'new', 'if', 'else', 'foreach', 'echo', 'header', 'http_response_code'
    ],
    sql: [
      'SELECT', 'FROM', 'WHERE', 'INNER', 'LEFT', 'RIGHT', 'JOIN', 'ON', 'AND', 'OR',
      'GROUP', 'BY', 'ORDER', 'DESC', 'ASC', 'WITH', 'AS', 'OVER', 'PARTITION',
      'DENSE_RANK', 'LAG', 'SUM', 'COUNT', 'ROUND', 'DATEFROMPARTS', 'YEAR', 'MONTH',
      'DATEADD', 'GETUTCDATE', 'SYSUTCDATETIME', 'UPDATE', 'SET', 'INSERT', 'INTO',
      'VALUES', 'MERGE', 'USING', 'WHEN', 'MATCHED', 'NOT', 'THEN', 'DELETE',
      'BEGIN', 'TRANSACTION', 'COMMIT', 'ROLLBACK', 'TRY', 'CATCH', 'EXCLUDED', 'ON CONFLICT',
      'CASE', 'ELSE', 'END', 'DISTINCT'
    ]
  };

  const keywords = keywordsMap[language] || keywordsMap.typescript;
  const lines = safe.split('\n');

  const processedLines = lines.map(line => {
    let commentIdx = -1;
    if (language === 'sql') {
      commentIdx = line.indexOf('--');
    } else {
      commentIdx = line.indexOf('//');
    }

    if (commentIdx !== -1) {
      const codePart = line.substring(0, commentIdx);
      const commentPart = line.substring(commentIdx);
      return highlightCodeTokens(codePart, keywords) + `<span class="token-comment">${commentPart}</span>`;
    }

    return highlightCodeTokens(line, keywords);
  });

  return processedLines.join('\n');
}

function highlightCodeTokens(text: string, keywords: string[]): string {
  const strings: string[] = [];

  // 1. Extract strings (handles HTML-escaped quotes &quot; and &#039; as well as raw backticks `)
  let res = text.replace(/(&quot;[\s\S]*?&quot;|&#039;[\s\S]*?&#039;|`[\s\S]*?`)/g, match => {
    const placeholder = `___STR_TOKEN_${strings.length}___`;
    strings.push(`<span class="token-string">${match}</span>`);
    return placeholder;
  });

  // 2. Object keys / property names before colon: e.g. name:
  res = res.replace(/(^|[{,\s])([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*:)/g, '$1<span class="token-property">$2</span>');

  // 3. Function calls: e.g. functionName(...)
  res = res.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()(?![^<]*>)/g, match => {
    if (keywords.includes(match)) return match;
    return `<span class="token-function">${match}</span>`;
  });

  // 4. Numbers
  res = res.replace(/\b(\d+(\.\d+)?)\b(?![^<]*>)/g, '<span class="token-number">$1</span>');

  // 5. Keywords
  keywords.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b(?![^<]*>)`, 'g');
    res = res.replace(regex, '<span class="token-keyword">$1</span>');
  });

  // 6. Restore strings from placeholders
  res = res.replace(/___STR_TOKEN_(\d+)___/g, (_, idx) => strings[parseInt(idx, 10)]);

  return res;
}

