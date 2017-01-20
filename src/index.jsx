/* globals $ */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import './styles/index.sass'


ReactDOM.render(
  <App />,
  $('#app')[0])

if (module.hot) {
  module.hot.accept()
}
