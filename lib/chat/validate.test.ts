import { test } from "node:test";
import assert from "node:assert/strict";
import { validateChatRequest } from "./validate.ts";

const user = (content: string) => ({ role: "user", content });

test("accepts a single valid user message", () => {
  const result = validateChatRequest({ messages: [user("What do you build?")] });
  assert.equal(result.ok, true);
});

test("rejects a non-object body", () => {
  assert.equal(validateChatRequest("nope").ok, false);
  assert.equal(validateChatRequest({ messages: "nope" }).ok, false);
});

test("rejects an empty history", () => {
  assert.equal(validateChatRequest({ messages: [] }).ok, false);
});

test("rejects more than 10 messages", () => {
  const messages = Array.from({ length: 11 }, () => user("hi"));
  assert.equal(validateChatRequest({ messages }).ok, false);
});

test("rejects an unknown role", () => {
  assert.equal(validateChatRequest({ messages: [{ role: "system", content: "hi" }] }).ok, false);
});

test("rejects when the last message is not from the user", () => {
  const messages = [user("hi"), { role: "assistant", content: "hello" }];
  assert.equal(validateChatRequest({ messages }).ok, false);
});

test("rejects whitespace-only content without calling the API", () => {
  assert.equal(validateChatRequest({ messages: [user("   ")] }).ok, false);
});

test("accepts exactly 1000 characters and rejects 1001", () => {
  assert.equal(validateChatRequest({ messages: [user("a".repeat(1000))] }).ok, true);
  assert.equal(validateChatRequest({ messages: [user("a".repeat(1001))] }).ok, false);
});
