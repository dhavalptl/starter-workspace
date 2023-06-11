import { defineConfig } from 'vite'

export default defineConfig({
  base: '/starter/',
  cacheDir: '../node_modules/.vite',
  build: {
    outDir: '../dist',
    //emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
        input: './src/index.ts',
        output: {
            entryFileNames: `server.js`
        },
        external: ['express']
      },
  }
})
