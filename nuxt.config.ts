// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    experimental: {
      openAPI: true,
    },

    openAPI: {
      production: 'runtime'
    }
  },

  compatibilityDate: '2025-03-11',
})