const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: ['./src/index.html']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    // modules: [path.resolve(__dirname, '..', 'src'), 'node_modules/'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
