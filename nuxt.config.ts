// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vuestic/nuxt',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
  ]
})
