/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // css parsing is slow. You may want to disabled this if your
    // tests don't rely on it
    css: true,
  }
})

// test config taken from here:
// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts