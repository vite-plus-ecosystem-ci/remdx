import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    clean: false,
    deps: { resolveDepSubpath: true },
    entry: ['./index.tsx'],
    format: ['esm'],
    outDir: '.',
    target: 'node22',
  },
});
