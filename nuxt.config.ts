// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en-US.json'
      },
    ],
    defaultLocale: 'en',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
