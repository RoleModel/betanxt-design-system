import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import reactSwc from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactSwc()],
  resolve: {
    alias: {
      // Add any path aliases your project uses here
    },
  },
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material'],
  },
  test: {
    // Default project (node/jsdom/etc.) can go here if needed
  },
  // Define additional Vitest projects replacing vitest.workspace.js
  projects: [
    {
      plugins: [storybookTest({ configDir: path.join(process.cwd(), '.storybook') })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{ browser: 'chromium' }],
        },
        setupFiles: ['.storybook/vitest.setup.ts'],
      },
    },
  ],
})
