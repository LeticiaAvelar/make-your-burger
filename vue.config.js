const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/make-your-burger/',
  outputDir: 'docs', // build vai para docs
});
