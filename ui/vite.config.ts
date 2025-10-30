import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
        },
        // Optimize asset file names for better caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `img/[name]-[hash][extname]`
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
    // Optimize for non-blocking resource loading
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    // Enable module preload polyfill for better browser support
    modulePreload: {
      polyfill: true,
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  // Optimize dependencies for better loading performance
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
  // Enable HTML minification and optimization
  esbuild: {
    legalComments: 'none',
  },
})