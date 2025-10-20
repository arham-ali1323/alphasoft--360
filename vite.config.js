import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      port: 5173,
    },
  },
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      'jquery': 'jquery/dist/jquery.js'
    }
  },
  optimizeDeps: {
    include: ['jquery']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['react-bootstrap', 'react-icons'],
          utils: ['@emailjs/browser', 'react-toastify']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
