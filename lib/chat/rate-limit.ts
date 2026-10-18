const LIMIT = 15;
const WINDOW_MS = 600_000;

const hits = new Map<string, { count: number; windowStart: number }>();

export function checkRateLimit(
  ip: string,
  now: number = Date.now(),
): { allowed: boolean; retryAfterSeconds: number } {
  for (const [key, entry] of hits) {
    if (now - entry.windowStart >= WINDOW_MS) hits.delete(key);
  }

  const entry = hits.get(ip);
  if (!entry) {
    hits.set(ip, { count: 1, windowStart: now });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count < LIMIT) {
    entry.count += 1;
    return { allowed: true, retryAfterSeconds: 0 };
  }

  const elapsed = now - entry.windowStart;
  return {
    allowed: false,
    retryAfterSeconds: Math.max(1, Math.ceil((WINDOW_MS - elapsed) / 1000)),
  };
}

export function clientIpFromHeaders(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for") ?? "";
  const first = forwarded.split(",")[0]?.trim();
  // A missing header collapses every such caller onto one key, so the limit gets stricter, never absent.
  return first || "unknown";
}

export function rateLimitStoreSize(): number {
  return hits.size;
}
