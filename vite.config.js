import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
  },
root,
  plugins: [react()],
    build: {
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          homepage: resolve(root, 'index.html'),
          blog: resolve(root, 'index.html'),
          blogpost: resolve(root, 'index.html'),
          marketplace: resolve(root, 'index.html'),
          error: resolve(root, 'index.html'),
        }
    },
        chunkSizeWarningLimit: 10000
    },
})

