import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        careers: resolve(__dirname, 'careers.html'),
        blog: resolve(__dirname, 'blog.html'),
        'blog-details': resolve(__dirname, 'blog-details.html'),
        'how-it-works': resolve(__dirname, 'how-it-works.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        partners: resolve(__dirname, 'partners.html'),
        terms: resolve(__dirname, 'terms.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        seo: resolve(__dirname, 'seo.html')
      }
    }
  }
})
