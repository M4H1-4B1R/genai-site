import { test } from "node:test";
import assert from "node:assert/strict";
import { readTextStream } from "./read-stream.ts";

const streamOf = (chunks: string[]) =>
  new ReadableStream<Uint8Array>({
    start(controller) {
      for (const c of chunks) controller.enqueue(new TextEncoder().encode(c));
      controller.close();
    },
  });

test("delivers every chunk in order", async () => {
  const seen: string[] = [];
  await readTextStream(streamOf(["Hel", "lo ", "there"]), (t) => seen.push(t));
  assert.equal(seen.join(""), "Hello there");
});

test("stops cleanly when aborted mid-stream", async () => {
  const controller = new AbortController();
  const seen: string[] = [];
  const stream = new ReadableStream<Uint8Array>({
    start(c) {
      c.enqueue(new TextEncoder().encode("first"));
      controller.abort();
      c.enqueue(new TextEncoder().encode("second"));
      c.close();
    },
  });
  await readTextStream(stream, (t) => seen.push(t), controller.signal);
  assert.ok(!seen.join("").includes("second"), "must not emit after abort");
});

test("an already-aborted signal emits nothing", async () => {
  const controller = new AbortController();
  controller.abort();
  const seen: string[] = [];
  await readTextStream(streamOf(["anything"]), (t) => seen.push(t), controller.signal);
  assert.deepEqual(seen, []);
});
