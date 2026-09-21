import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'


const jsxInJsPlugin = () => ({
  name: 'jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (id.includes('node_modules') || !id.endsWith('.js')) {
      return null
    }

    return transformWithEsbuild(code, id, {
      loader: 'jsx',
      jsx: 'automatic',
    })
  },
})

export default defineConfig({
  plugins: [jsxInJsPlugin(), react()],
  // Tells the dependency pre bundler how to parse the same `.js` modules.
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
})