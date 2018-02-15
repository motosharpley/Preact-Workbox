const path = require('path'),
    htmlPlugin = require('html-webpack-plugin'),
    cleanPlugin = require('clean-webpack-plugin'),
    build = 'build',
    workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: 
    [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 8080
  },
  plugins: [
    new workboxPlugin({
      globDirectory: build,
      globPatterns: ['**/*.{html,js}'],
      swDest: path.join(build, 'sw.js'),
      clientsClaim: true,
      skipWaiting: true,
    })  
  ]
};