import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'

import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const API_KEY = 'AIzaSyB0NGuGw308FN3TpLmDv6AOFmn8OWSLVCk'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this._videoSearch('League of Legends')
    this._videoSearch = this._videoSearch.bind(this)
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
              <h1 className="text-center">Youtube Search</h1>
              <SearchBar onInputSubmit={this._videoSearch} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 col-md-12 col-lg-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-4 col-md-10 col-lg-4">
              <VideoList
                  videos={this.state.videos}
                  onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              />
            </div>
          </div>
        </section>
    )
  }
}
