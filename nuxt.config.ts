// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/image'
  ],
  routeRules: {
    '/about': { prerender: true },
    '/': { prerender: true },
    '/contact': { prerender: true }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://api.tianditu.gov.cn/api?v=4.0&tk=您的天地图密钥'
        }
      ]
    }
  }
})