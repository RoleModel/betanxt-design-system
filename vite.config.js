import { defineConfig } from 'vite'
import reactSwc from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [reactSwc()],
  resolve: {
    alias: {
      // Add any path aliases your project uses here
    },
  },
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material']
  },
  // This empty config is sufficient for Storybook to work
})
