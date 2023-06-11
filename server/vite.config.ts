import { defineConfig } from 'vite'

export default defineConfig({
  base: '/starter/',
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
