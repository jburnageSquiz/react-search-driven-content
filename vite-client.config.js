import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  define: { "process.env.NODE_ENV": '"production"' },
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/entry-client.jsx"),
      name: "client",
      fileName: "entry-client",
      formats: ["iife"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [],
});