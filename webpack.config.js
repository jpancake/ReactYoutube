const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
  'script-loader!jquery/dist/jquery.min.js',
  'script-loader!tether/dist/js/tether.min.js',
  'script-loader!bootstrap/dist/js/bootstrap.min.js',
  'react',
  'react-dom',
  'tether',
  'youtube-api-search'
]

module.exports = {
  entry: {
    bundle: [
      './src/index.jsx'
    ],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  externals: {
    jquery: 'jQuery'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js', '.jsx', '.sass', '.scss'],
    alias: {
      Components: path.resolve(__dirname, 'src/components')
    }
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader',
            {
              loader: 'sass-loader',
              query: {
                includePaths: path.resolve(__dirname, 'node_modules/bootstrap/scss')
              }
            }]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      filename: '[name]'.js,
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/views/template.pug',
      filetype: 'pug',
      filename: 'index.pug'
    }),
    new HtmlWebpackPugPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
