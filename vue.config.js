const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      stylus: {
        stylusOptions: {
          import: [path.resolve(__dirname, "src/stylus/variables.styl")],
        },
      },
    },
  },
});
