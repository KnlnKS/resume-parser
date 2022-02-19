const withPWA = require("next-pwa");

const settings = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports =
  process.env.NODE_ENV === "production"
    ? withPWA({
        pwa: {
          dest: "public",
        },
        ...settings,
      })
    : settings ;
