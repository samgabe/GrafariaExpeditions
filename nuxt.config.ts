// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Grafiria Expeditions - Kenya Wildlife Adventures',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience unforgettable Kenya wildlife safaris with Grafiria Expeditions. Expert guides, luxury accommodations, and authentic African adventures.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/grafiria_favicon.ico' }
      ]
    }
  }
})
