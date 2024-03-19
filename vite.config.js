import { defineConfig, preprocessCSS } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/Global.scss";'
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@ui', replacement: '/src/components/ui' },
      { find: '@screens', replacement: '/src/components/screens' },
      { find: '@sections', replacement: '/src/components/sections' },
      { find: '@blocks', replacement: '/src/components/blocks' },
    ],
  },
})
