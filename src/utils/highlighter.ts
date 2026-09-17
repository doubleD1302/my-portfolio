import { escapeHtml } from './dom';

export function highlightCode(code: string, language: string): string {
  // First escape all HTML entities
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

  // Split lines to safely handle comments and strings
  const lines = safe.split('\n');
  const processedLines = lines.map(line => {
    // 1. Comments: single line
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
  // Match strings: "..." or '...' or `...`
  let res = text.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, match => {
    return `<span class="token-string">${match}</span>`;
  });

  // Highlight numbers (outside tags)
  res = res.replace(/\b(\d+(\.\d+)?)\b(?![^<]*>)/g, '<span class="token-number">$1</span>');

  // Highlight keywords
  keywords.forEach(kw => {
    // Look for exact word boundary, not inside an HTML tag
    const regex = new RegExp(`\\b(${kw})\\b(?![^<]*>)`, 'g');
    res = res.replace(regex, '<span class="token-keyword">$1</span>');
  });

  return res;
}
