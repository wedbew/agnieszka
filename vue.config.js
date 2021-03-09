const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        fonts: path.resolve(process.cwd(), './src/assets/fonts/'),
      },
    },
  },
};
