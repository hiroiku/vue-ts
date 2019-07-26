const path = require('path');
const fs = require('fs');

const package = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')));
const modules = Object.keys(package.dependencies);
const groups = {};
for (const module of modules) {
  groups[module] = {
    name: module,
    test: new RegExp(`node_modules\/${module}\/`),
    enforce: true,
  };
}

module.exports = {
  publicPath: '.',
  outputDir: './dist/',
  lintOnSave: true,
  productionSourceMap: false,
  pluginOptions: {
    critical: {
      width: 375,
      height: 812,
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'initial',
        cacheGroups: groups,
      },
    },
  },
};
