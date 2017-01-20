const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.devConfig')
const path = require('path')

const server = new WebpackDevServer(webpack(config), {
  contentBase: '/public',
  hot: true,
  historyApiFallback: false,
  compress: false,
  setup: (app) => {
    app.set('views', path.join(__dirname, 'public'))
    app.set('view engine', 'pug', { pretty: true })
    app.get('/', (req, res) => {
      res.render('index')
    })
  },
  quiet: false,
  noInfo: false,
  stats: {
    colors: true
  }
})
server.listen(8080, 'localhost', () => {
  console.log('WebpackDevServer is running on port 8080')
})
