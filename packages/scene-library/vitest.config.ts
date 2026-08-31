import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Remotion and layout assertions each launch Chromium; serial files avoid
    // starving the browser processes on shared CI runners.
    fileParallelism: false,
    testTimeout: 120_000,
  },
});
