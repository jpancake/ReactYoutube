const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3050

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname + req.url}`)
  } else {
    next()
  }
})

app.set('views', path.join(__dirname, 'public/'))
app.set('view engine', 'pug', { pretty: true })

app.get('/', (req, res) => {
  res.render('index')
})

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Express Server listening on port ${PORT}`)
})

