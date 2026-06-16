export type TOCItem = {
  level: 2 | 3;
  text: string;
  id: string;
};

function replaceHeadings(
  html: string | undefined,
  counter: { index: number },
  tocItems: TOCItem[]
): string {
  if (!html) return "";
  return html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (_match, level, attrs, content) => {
      counter.index++;
      const text = content.replace(/<[^>]*>/g, "").trim();
      const id = `heading-${counter.index}`;
      if (text) tocItems.push({ level: parseInt(level) as 2 | 3, text, id });
      return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
    }
  );
}

export function processContent(html: string): {
  processedHtml: string;
  tocItems: TOCItem[];
} {
  const tocItems: TOCItem[] = [];
  const counter = { index: 0 };
  const processedHtml = replaceHeadings(html, counter, tocItems);
  return { processedHtml, tocItems };
}

export function processBlocks(htmlChunks: string[]): {
  processedChunks: string[];
  tocItems: TOCItem[];
} {
  const tocItems: TOCItem[] = [];
  const counter = { index: 0 };
  const processedChunks = htmlChunks.map((html) =>
    replaceHeadings(html, counter, tocItems)
  );
  return { processedChunks, tocItems };
}
