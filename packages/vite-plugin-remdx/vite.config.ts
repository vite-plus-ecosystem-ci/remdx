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
});
