import { defineConfig } from 'vitest/config'
import config from './vite.config'

export default defineConfig({...config,
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.spec.{ts,tsx}'],
    setupFiles: 'tests/setup.ts',
    coverage: {
      reporter: ['text'],
    },
  },
})
