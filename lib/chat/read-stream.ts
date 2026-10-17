// Resolves rather than throwing when aborted: the caller aborts on panel close
// and unmount, which are normal, not errors.
export async function readTextStream(
  body: ReadableStream<Uint8Array>,
  onChunk: (text: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  const reader = body.getReader();
  const decoder = new TextDecoder();

  try {
    while (true) {
      if (signal?.aborted) break;
      const { done, value } = await reader.read();
      if (done) break;
      if (signal?.aborted) break;
      const text = decoder.decode(value, { stream: true });
      if (text) onChunk(text);
    }
  } finally {
    await reader.cancel().catch(() => {});
  }
}
