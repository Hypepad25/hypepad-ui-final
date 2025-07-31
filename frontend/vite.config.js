import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      // optional: add any path aliases you use, e.g. '@': '/src'
    }
  }
});
