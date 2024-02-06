// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      microCmsApiServiceUrl: process.env.MICROCMS_API_SERVICE_URL,
      microCmsApiKey: process.env.MICROCMS_API_KEY,
    },
  },
});
