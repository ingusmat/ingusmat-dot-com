import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import sitemap from '@astrojs/sitemap'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  site: 'https://ingusmat.com',
  integrations: [vue(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
