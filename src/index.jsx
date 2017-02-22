/* globals $ */

import React from 'react'
import ReactDOM from 'react-dom'

import App from 'Components/App'
import 'Styles'


ReactDOM.render(
  <App />,
  $('#app')[0])

if (module.hot) {
  module.hot.accept()
}
