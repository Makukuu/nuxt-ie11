export default {
  head: {
    title: "nuxt1",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  plugins: ["./plugins/polyfills.js"],

  components: true,

  build: {
    babel: {
      presets() {
        return [
          [
            require.resolve("@nuxt/babel-preset-app"),
            {
              targets: { ie: 11 },
              useBuiltIns: "usage",
              corejs: { version: 3 },
              modules: "commonjs",
            },
          ],
        ];
      },
    },
    transpile: [/.nuxt\/dist\/client/, /node_modules/],
  },
};
