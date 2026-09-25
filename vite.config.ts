import nkzw from '@nkzw/oxlint-config';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-0-0-rc-1-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  fmt: {
    experimentalSortImports: {
      newlinesBetween: false,
    },
    experimentalSortPackageJson: {
      sortScripts: true,
    },
    ignorePatterns: [
      'coverage/',
      'dist/',
      'node_modules/',
      'packages/create-remdx/index.mjs',
      'packages/remdx/index.d.ts',
      'packages/remdx/index.js',
      'packages/vite-plugin-remdx/index.d.ts',
      'packages/vite-plugin-remdx/index.mjs',
      'pnpm-lock.yaml',
      'tsconfig.tsbuildinfo',
      'vite.config.ts.timestamp-*',
    ],
    singleQuote: true,
  },
  lint: {
    extends: [nkzw],
    ignorePatterns: [
      'packages/create-remdx/template/**',
      'packages/create-remdx/index.mjs',
      'packages/remdx/index.d.ts',
      'packages/remdx/index.js',
      'packages/vite-plugin-remdx/index.d.ts',
      'packages/vite-plugin-remdx/index.mjs',
      'vite.config.ts.timestamp-*',
    ],
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    tasks: {
      'test:all': {
        command: 'vp check && vp test',
      },
    },
  },
  staged: {
    '*': 'vp check --fix',
  },
});
