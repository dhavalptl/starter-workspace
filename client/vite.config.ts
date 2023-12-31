import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/starter/',
  cacheDir: '../node_modules/.vite',
  build: {
    assetsDir: '',
    outDir: '../dist/static',
    emptyOutDir: true,
    rollupOptions: {
      external: ['msw']
    }
  },
  plugins: [react()]
});
