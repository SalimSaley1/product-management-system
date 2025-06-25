import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const srcPath = path.resolve(__dirname, './src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': srcPath,
      '@components': path.resolve(srcPath, './components'),
      '@services': path.resolve(srcPath, './services'),
      '@pages': path.resolve(srcPath, './pages'),
      '@styles': path.resolve(srcPath, './styles'),
      '@assets': path.resolve(srcPath, './assets'),
    },
  },

})
