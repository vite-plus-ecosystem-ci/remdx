import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    deps: { resolveDepSubpath: true },
    clean: false,
    entry: ['./index.ts'],
    format: ['esm'],
    outDir: '.',
    target: 'node22',
  },
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
});
