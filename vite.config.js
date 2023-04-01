import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
  },
  plugins: [react(),
    Pages({
      dirs: [
        { dir: 'src/pages/HomePage', baseRoute: '' },
        { dir: 'src/pages/Blog', baseRoute: 'blog' },
        { dir: 'src/pages/BlogPost', baseRoute: 'blog/:slug' },
        { dir: 'src/pages/MarketPlace', baseRoute: 'marketPlace' },
        { dir: 'src/pages/Error', baseRoute: 'error' },
      ],
    }),],
    build: {
        chunkSizeWarningLimit: 10000
    },
})

