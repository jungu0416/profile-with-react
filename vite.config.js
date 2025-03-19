import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

const __dirname = path.resolve()

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
})
