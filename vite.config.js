import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Ganti '/NAMA-REPO/' sesuai nama repository kamu di GitHub
// Misal repo kamu: github.com/alfin/my-vue-app
// maka base = '/my-vue-app/'
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Web-cari-item-mlbb/' : '/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
