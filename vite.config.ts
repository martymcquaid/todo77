import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/74d0d102-32d2-4b31-acf8-52e856835e24/preview',
  plugins: [react()],
  server: {
    port: 5207,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5207,
    },
  },
})
