// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: [
    'primevue/resources/themes/bootstrap4-dark-blue/theme.css',
    '~/assets/css/main.css'
  ],
  modules: [
    'nuxt-primevue'
  ]
})
