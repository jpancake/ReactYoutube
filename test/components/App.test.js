/* globals describe, it, expect, beforeEach, afterEach */
/* eslint no-unused-expressions: 0 */

import React from 'react'
import { render, mount } from 'enzyme'
import sinon from 'sinon'
import YTSearch from 'youtube-api-search'

import App from '../../src/components/App'
import SearchBar from '../../src/components/SearchBar'
import VideoDetail from '../../src/components/VideoDetail'
import VideoList from '../../src/components/VideoList'

const API_KEY = 'AIzaSyB0NGuGw308FN3TpLmDv6AOFmn8OWSLVCk'

function getProps(props = {}) {
  return {
    ...props
  }
}

function renderApp(props) {
  return render(<App {...getProps(props)} />)
}

function mountApp(props) {
  return mount(<App {...getProps(props)} />)
}

describe('App', () => {
  it('exists', () => {
    expect(App).to.exist
  })
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      wrapper = renderApp()
    })
    it('renders SearchBar with a class of search-bar', () => {
      expect(SearchBar).to.have.length(1)
      expect(wrapper).to.have.descendants('.search-bar')
    })
    it('renders SearchBar with default state', () => {
      const wrapper = mountApp()
      expect(wrapper.state('videos')).to.eql([])
      expect(wrapper.state('selectedVideo')).to.eql(null)
    })
    it('renders VideoDetail with loading text', () => {
      expect(VideoDetail).to.have.length(1)
      expect(wrapper).to.include.text('Loading...')
    })
    it('renders VideoList', () => {
      expect(VideoList).to.have.length(1)
      expect(wrapper).to.have.descendants('.video-list')
    })
  })
  describe('youtube-api-search', () => {
    let wrapper
    let spy
    let term
    beforeEach((done) => {
      term = 'League of Legends'
      spy = sinon.spy(App.prototype, '_videoSearch')
      wrapper = mountApp()
      YTSearch({ term, key: API_KEY }, videos => {
        wrapper.setState({
          videos,
          selectedVideo: videos[0]
        })
        done()
      })
    })
    afterEach(() => {
      App.prototype._videoSearch.restore()
    })
    it('should call videoSearch with "term"', () => {
      expect(spy).to.have.been.calledWith(term)
    })
    it('should change change state "videos"', () => {
      expect(wrapper).to.have.state('videos').to.have.length(5)
    })
    it('should change video on video select', () => {
      wrapper.find('li').last().simulate('click')
      expect(wrapper).to.have.state('selectedVideo').to.equal(wrapper.state().videos[4])
    })
  })
})
