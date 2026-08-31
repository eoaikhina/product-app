import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Stream and in-memory HTTP checks need headroom on shared CI runners.
    testTimeout: 20_000,
  },
});
