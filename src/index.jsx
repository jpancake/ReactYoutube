/* globals $ */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/SearchBar'
import './styles/index.sass'

const API_KEY = 'AIzaSyCfJLw5mX8Qn6fveGtIAO1KoCATbI_yrlA'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this._videoSearch('League of Legends')
  }

  _videoSearch(term) {
    YTSearch({ term, key: API_KEY }, videos => this.setState(
      {
        videos,
        selectedVideo: videos[0]
      }))
  }
  render() {
    return (
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <SearchBar onInputSubmit={this._videoSearch} />
          </div>
        </div>
        <div className="row justify-content-center">

        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  $('#app')[0])

if (module.hot) {
  module.hot.accept()
}
