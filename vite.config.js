import { defineConfig } from 'vite'
import { resolve } from 'path'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 1666,
  },
  plugins: [react(),
    ViteMinifyPlugin({}),
    Pages({
      dirs: [
        { dir: 'src/pages/index', baseRoute: '' },
        { dir: 'src/pages/BlogPost', baseRoute: 'article' },
        { dir: 'src/pages/article/Post', baseRoute: 'article/:slug' },
        { dir: 'src/pages/studio', baseRoute: 'studio' },
        { dir: 'src/pages/Error', baseRoute: '*' },
      ],
    }),],
    build: {
        chunkSizeWarningLimit: 10000
    },
})