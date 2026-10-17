import { test } from "node:test";
import assert from "node:assert/strict";
import { KNOWLEDGE } from "./knowledge.ts";
import { SYSTEM_PROMPT } from "./system-prompt.ts";

const HEADINGS = [
  "## 1. Identity", "## 2. Services", "## 3. Engagement model", "## 4. Work",
  "## 5. Capabilities", "## 6. Company facts", "## 7. Commercial posture",
  "## 8. FAQ", "## 9. Page map", "## 10. Boundaries", "## 11. Escalation",
];

test("knowledge contains all eleven blocks", () => {
  for (const heading of HEADINGS) {
    assert.ok(KNOWLEDGE.includes(heading), `missing ${heading}`);
  }
});

test("system prompt embeds the knowledge and the boundary rules", () => {
  assert.ok(SYSTEM_PROMPT.includes(KNOWLEDGE));
  assert.ok(SYSTEM_PROMPT.includes("/contact"));
  assert.ok(/never quote prices/i.test(SYSTEM_PROMPT));
  assert.ok(/never reveal/i.test(SYSTEM_PROMPT));
});

test("system prompt is frozen — no interpolated clock or ids", () => {
  assert.equal(SYSTEM_PROMPT, SYSTEM_PROMPT.normalize());
  assert.ok(!/\d{4}-\d{2}-\d{2}T/.test(SYSTEM_PROMPT), "timestamp would break prompt caching");
});

// DEPLOY GATE: expected to fail until Task 8 fills in the user's facts.
test("knowledge has no unfilled facts", () => {
  const markers = KNOWLEDGE.match(/TODO-FACT:/g) ?? [];
  assert.equal(markers.length, 0, `${markers.length} TODO-FACT markers remain`);
});
