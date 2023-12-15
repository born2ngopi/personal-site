// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'dark'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
