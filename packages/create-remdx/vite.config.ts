import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    deps: { resolveDepSubpath: true },
    clean: false,
    entry: ['./index.tsx'],
    format: ['esm'],
    outDir: '.',
    target: 'node22',
  },
});
