import fs from "node:fs";
import path from "node:path";

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type PostSummary = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  topic: string;
  summary: string;
  readTime: string;
  dateLabel: string;
};

export type Post = PostSummary & { blocks: Block[] };

const dir = path.join(process.cwd(), "content/insights");

// Front matter values may be JSON strings (quoted) or bare text.
function value(raw: string) {
  const v = raw.trim();
  return v.startsWith('"') ? (JSON.parse(v) as string) : v;
}

function parseBlocks(body: string): Block[] {
  const blocks: Block[] = [];
  for (const chunk of body.split(/\n{2,}/)) {
    const text = chunk.trim();
    if (!text) continue;
    if (text.startsWith("## ")) {
      blocks.push({ type: "h2", text: text.slice(3) });
    } else if (text.startsWith("- ")) {
      const items = text.split("\n").map((l) => l.replace(/^- /, "").trim());
      const last = blocks.at(-1);
      if (last?.type === "ul") last.items.push(...items);
      else blocks.push({ type: "ul", items });
    } else {
      blocks.push({ type: "p", text });
    }
  }
  return blocks;
}

function parse(file: string): Post {
  const src = fs.readFileSync(path.join(dir, file), "utf8");
  const [, front, body] = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
  if (!front) throw new Error(`content/insights/${file}: missing front matter`);
  const meta: Record<string, string> = {};
  for (const line of front.split("\n")) {
    const i = line.indexOf(":");
    meta[line.slice(0, i)] = value(line.slice(i + 1));
  }
  const words = body.split(/\s+/).length;
  return {
    slug: file.replace(/\.md$/, ""),
    title: meta.title,
    date: meta.date,
    topic: meta.topic,
    summary: meta.summary,
    readTime: `${Math.max(1, Math.round(words / 220))} min read`,
    dateLabel: new Date(`${meta.date}T00:00:00Z`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }),
    blocks: parseBlocks(body),
  };
}

let cache: Post[] | undefined;

// Newest first. Reads once per process; posts are static at build time.
export function getPosts(): Post[] {
  cache ??= fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map(parse)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  return cache;
}

export function getPost(slug: string) {
  return getPosts().find((p) => p.slug === slug);
}

// Drops the body so client components don't receive every post's full text.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function toSummary({ blocks: _blocks, ...summary }: Post): PostSummary {
  return summary;
}
