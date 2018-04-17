const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/ui/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
  entry: './src/ui/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ , query: {presets: ['es2015', 'react']}},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
