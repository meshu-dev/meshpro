// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
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
  ],
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-primevue',
    'vue-recaptcha/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      recaptcha: {
        v3SiteKey: process.env.GOOGLE_RECAPTCHA_KEY
      },
      portfolioApiUrl: process.env.PORTFOLIO_API_URL,
      hyperApiUrl: process.env.HYPER_API_URL,
      blogUrl: process.env.BLOG_URL
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/about', '/portfolio', '/contact']
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
  },
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          sans: ['Bebas Neue', 'sans-serif'],
        }
      }
    }
  }
})
