import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'
import { readFileSync } from 'fs'

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'))

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@base': path.resolve(__dirname, 'src/styles/base'),
      '@components-styles': path.resolve(__dirname, 'src/styles/components'),
      '@globals': path.resolve(__dirname, 'src/styles/globals'),
      '@layout': path.resolve(__dirname, 'src/styles/layout'),
      '@themes': path.resolve(__dirname, 'src/styles/themes'),
      '@utilities': path.resolve(__dirname, 'src/styles/utilities'),
    },
  },
  build: {
    sourcemap: true,
  },
})
