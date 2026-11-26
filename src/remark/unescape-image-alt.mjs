// Docusaurus' `transformImage` remark plugin (@docusaurus/mdx-loader) rewrites
// local markdown images into JSX <img> nodes and pre-escapes `alt` and `title`
// with `escape-html`. Those values are stored as JSX string attributes, which
// React escapes again on render, so `Sofia's` is served as `Sofia&amp;#39;s`.
// This plugin runs after the defaults and reverses that one escape, so React's
// escape is the only one left. Still present in Docusaurus 3.10.2; delete this
// file once upstream stops pre-escaping (re-check on each Docusaurus upgrade).

const ATTRS = new Set(['alt', 'title']);

// Exact inverse of escape-html; &amp; must be decoded last.
function decode(value) {
  return value
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function walk(node) {
  if (
    (node.type === 'mdxJsxTextElement' || node.type === 'mdxJsxFlowElement') &&
    node.name === 'img'
  ) {
    for (const attr of node.attributes ?? []) {
      if (
        attr.type === 'mdxJsxAttribute' &&
        ATTRS.has(attr.name) &&
        typeof attr.value === 'string'
      ) {
        attr.value = decode(attr.value);
      }
    }
  }
  for (const child of node.children ?? []) walk(child);
}

export default function unescapeImageAlt() {
  return (tree) => walk(tree);
}
