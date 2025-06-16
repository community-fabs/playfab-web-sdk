export function mockFetch() {
  global.fetch = jest.fn();
}

export function clearMockFetch() {
  if (!global.fetch) {
    throw new Error("fetch is not mocked, cannot clear mock.");
  }

  (global.fetch as jest.Mock).mockClear();
}

export function mockFetchResponse<T>(
  data: T,
  status: number = 200,
  responseHeaders: Record<string, string> = {}
) {
  if (!global.fetch) {
    throw new Error("fetch is not mocked, cannot mock response.");
  }

  const response = new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...responseHeaders,
    },
  });
  (fetch as jest.Mock).mockResolvedValue(response);
}
