import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    rollupOptions: {
      globals: {
        'window': 'window',
      }
    },
  },
  ssr: {
    entry: resolve(__dirname, 'src/entry-server.jsx'),
    external: [],
    target: 'node',
    format: 'cjs',
  },
  plugins: [],
})
