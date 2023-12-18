// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  },
  ssr: true,
  devtools: { enabled: true },
  css: [
    'primevue/resources/themes/bootstrap4-dark-blue/theme.css',
    //'primevue/resources/themes/saga-blue/theme.css',
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-primevue',
    'vue-recaptcha/nuxt'
  ],
  runtimeConfig: {
    public: {
      recaptcha: {
        v3SiteKey: process.env.GOOGLE_RECAPTCHA_KEY
      }
    }
  },
  plugins: [
    '~/plugins/font-awesome'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      "Bebas Neue": true
    }
  }
})
