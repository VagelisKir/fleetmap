import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/portImg': 'http://localhost:3000',
      '/dataImg': 'http://localhost:3000',
      '/ports': 'http://localhost:3000',
      '/ships': 'http://localhost:3000',
    },
  },
})
