import { defineNuxtConfig } from 'nuxt/config'
import { runtimeConfig } from './configs/runtimeConfig'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-icons', 'nuxt-swiper'],
  css: ['assets/scss/app.scss'],
  components: {
    global: true,
    dirs: ['~/components', '~/tau-components'],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        verbatimModuleSyntax: false,
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  app: {
    head: {
      title: 'TauMarket',
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: 'upgrade-insecure-requests',
        },
        {
          charset: 'utf-8',
        },
      ],
    },
  },
})
