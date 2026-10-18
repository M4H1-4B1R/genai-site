import { test } from "node:test";
import assert from "node:assert/strict";
import { parseAnswer } from "./render-answer.ts";

test("a leading ## line becomes the eyebrow", () => {
  const [first] = parseAnswer("## Typical 3-Phase Onboarding\nWe start with a call.");
  assert.deepEqual(first, { type: "eyebrow", text: "Typical 3-Phase Onboarding" });
});

test("a ## on a later line is literal text, not an eyebrow", () => {
  const nodes = parseAnswer("We start with a call.\n## not a heading");
  assert.ok(nodes.every((n) => n.type !== "eyebrow"));
  assert.ok(JSON.stringify(nodes).includes("## not a heading"));
});

test("splits bold lead-ins", () => {
  const [node] = parseAnswer("**Discovery Call:** 30 minutes.");
  assert.deepEqual(node, {
    type: "paragraph",
    parts: [{ bold: true, text: "Discovery Call:" }, { bold: false, text: " 30 minutes." }],
  });
});

test("an unbalanced ** is literal and does not swallow the rest", () => {
  const [node] = parseAnswer("we build **agentic systems and ship them");
  assert.equal(node.type, "paragraph");
  assert.ok(JSON.stringify(node).includes("ship them"));
});

test("blank lines separate paragraphs", () => {
  const nodes = parseAnswer("First line.\n\nSecond line.");
  assert.equal(nodes.filter((n) => n.type === "paragraph").length, 2);
});

test("empty input yields no nodes", () => {
  assert.deepEqual(parseAnswer(""), []);
});
