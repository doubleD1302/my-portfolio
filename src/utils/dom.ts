/**
 * Helper to escape HTML characters to prevent XSS.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Type-safe query selector helper.
 */
export function qs<T extends HTMLElement>(selector: string, parent: ParentNode = document): T | null {
  return parent.querySelector<T>(selector);
}

/**
 * Type-safe query selector all helper.
 */
export function qsa<T extends HTMLElement>(selector: string, parent: ParentNode = document): T[] {
  return Array.from(parent.querySelectorAll<T>(selector));
}

/**
 * Helper to create an element with classes and attributes.
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  innerHTML?: string
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  if (className) {
    el.className = className;
  }
  if (innerHTML !== undefined) {
    el.innerHTML = innerHTML;
  }
  return el;
}
