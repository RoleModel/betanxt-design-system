import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add any path aliases your project uses here
    },
  },
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material'],
  },
  // This empty config is sufficient for Storybook to work
})
