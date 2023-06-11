import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/starter/',
  build: {
    assetsDir: '',
    outDir: '../dist/static',
    emptyOutDir: true,
  },
  plugins: [react()],
})
