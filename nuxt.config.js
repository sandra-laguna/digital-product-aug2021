export default {
  target: "static",
  publicRuntimeConfig: {
    baseUrl: process.env.DOMAIN ? `https://${process.env.DOMAIN}` : "http://localhost:3000",
    assetsUrl: process.env.DOMAIN ? `https://api.${process.env.DOMAIN}/assets` : "http://localhost:8080/assets",
    n8nUrl: process.env.DOMAIN ? `https://n8n.${process.env.DOMAIN}` : "http://localhost:5678"
  },
  head: {
    title: "Template",
    htmlAttrs: {
      lang: "es"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  build: {},
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  modules: ["@nuxtjs/axios"],
  plugins: ["~/plugins/webhook"],
  content: {},
  components: true,
  googleFonts: {
    display: "swap",
    families: {
      Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  tailwindcss: {
    cssPath: "tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false
  },
  axios: {
    baseURL: process.env.DOMAIN ? `https://api.${process.env.DOMAIN}` : "http://localhost:8080"
  }
};
