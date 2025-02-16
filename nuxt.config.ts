// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
