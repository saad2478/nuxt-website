// nuxt.config.js
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    dir: 'assets/images', // Check if this path is correct relative to the root of your project
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
