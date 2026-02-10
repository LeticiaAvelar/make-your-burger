const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '', // garante caminhos relativos
  outputDir: 'docs', // build vai para docs
});
