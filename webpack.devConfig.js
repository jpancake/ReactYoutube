const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')

module.exports = {
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server',
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!tether/dist/js/tether.min.js',
      'script-loader!bootstrap/dist/js/bootstrap.min.js',
      './src/index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  externals: {
    jquery: 'jQuery'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Styles: path.resolve(__dirname, 'src/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        loaders: ['style-loader', 'css-loader',
          {
            loader: 'sass-loader',
            query: {
              includePaths: [path.resolve(__dirname, 'node_modules/bootstrap/scss')]
            }
          }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/views/template.pug',
      filetype: 'pug',
      filename: 'index.pug'
    }),
    new HtmlWebpackPugPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map'
}
