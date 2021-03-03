const withPWA = require("next-pwa")

module.exports = withPWA({
    pwa: {
        dest: "public",
    },
    // i18n: {
    //     locales: ["en", "ja"],
    //     defaultLocale: "ja",
    // },
    future: { webpack5: true }
});