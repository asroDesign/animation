// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://api.example.com/',
      fileURL: process.env.FIEL_URL || 'https://api.example.com/',
    },
  },

  plugins: [
    // '~/plugins/pinia.client.ts', // Ensure Pinia is loaded early
    // Other plugins
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image','nuxt-icons'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,

  },

})