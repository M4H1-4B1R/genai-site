import { test } from "node:test";
import assert from "node:assert/strict";
import { checkRateLimit, clientIpFromHeaders, rateLimitStoreSize } from "./rate-limit.ts";

test("allows the first call", () => {
  assert.equal(checkRateLimit("1.1.1.1", 0).allowed, true);
});

test("allows 15 calls then blocks the 16th", () => {
  for (let i = 0; i < 15; i++) {
    assert.equal(checkRateLimit("2.2.2.2", 0).allowed, true, `call ${i + 1} should be allowed`);
  }
  const blocked = checkRateLimit("2.2.2.2", 0);
  assert.equal(blocked.allowed, false);
  assert.ok(blocked.retryAfterSeconds > 0 && blocked.retryAfterSeconds <= 600);
});

test("allows again after the window rolls over", () => {
  for (let i = 0; i < 15; i++) checkRateLimit("3.3.3.3", 0);
  assert.equal(checkRateLimit("3.3.3.3", 599_999).allowed, false);
  assert.equal(checkRateLimit("3.3.3.3", 600_001).allowed, true);
});

test("tracks distinct IPs independently", () => {
  for (let i = 0; i < 15; i++) checkRateLimit("4.4.4.4", 0);
  assert.equal(checkRateLimit("4.4.4.4", 0).allowed, false);
  assert.equal(checkRateLimit("5.5.5.5", 0).allowed, true);
});

test("sweeps stale entries instead of growing forever", () => {
  checkRateLimit("6.6.6.6", 0);
  const before = rateLimitStoreSize();
  checkRateLimit("7.7.7.7", 600_001);
  assert.ok(rateLimitStoreSize() < before + 2, "expired entries should be swept");
});

test("keys on the first entry of x-forwarded-for", () => {
  const headers = new Headers({ "x-forwarded-for": "9.9.9.9, 10.0.0.1, 172.16.0.1" });
  assert.equal(clientIpFromHeaders(headers), "9.9.9.9");
});

test("falls back to a shared key when the header is absent", () => {
  assert.equal(clientIpFromHeaders(new Headers()), "unknown");
});
