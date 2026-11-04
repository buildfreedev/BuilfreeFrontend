import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  // Only used if .env switches to VITE_API_BASE_URL=/api/v1 (e.g. if the dev
  // backend's CORS ever stops allowing localhost). Same host as .env.
  server: {
    proxy: {
      '/api': {
        target: 'https://api-dev.buildfree.dev',
        changeOrigin: true,
      },
    },
  },
})
