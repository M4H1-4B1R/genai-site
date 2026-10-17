export type AnswerPart = { bold: boolean; text: string };
export type AnswerNode =
  | { type: "eyebrow"; text: string }
  | { type: "paragraph"; parts: AnswerPart[] };

const BOLD = /\*\*([\s\S]+?)\*\*/g;

function splitBold(text: string): AnswerPart[] {
  const parts: AnswerPart[] = [];
  let cursor = 0;
  BOLD.lastIndex = 0;
  for (let match = BOLD.exec(text); match; match = BOLD.exec(text)) {
    if (match.index > cursor) parts.push({ bold: false, text: text.slice(cursor, match.index) });
    parts.push({ bold: true, text: match[1] });
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) parts.push({ bold: false, text: text.slice(cursor) });
  return parts;
}

export function parseAnswer(text: string): AnswerNode[] {
  const nodes: AnswerNode[] = [];
  const lines = text.split("\n");

  // Only the first line may be the eyebrow label; a "## " anywhere else is literal.
  if (lines[0]?.startsWith("## ")) {
    nodes.push({ type: "eyebrow", text: lines[0].slice(3).trim() });
    lines.shift();
  }

  for (const block of lines.join("\n").split(/\n\s*\n/)) {
    if (block.trim() === "") continue;
    nodes.push({ type: "paragraph", parts: splitBold(block.replace(/^\n+/, "")) });
  }

  return nodes;
}
