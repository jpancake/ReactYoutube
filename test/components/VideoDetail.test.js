/* globals describe, it, expect, beforeEach */
/* eslint no-unused-expressions: 0 */

import React from 'react'
import { render, mount } from 'enzyme'

import VideoDetail from '../../src/components/VideoDetail'

function getProps(props) {
  return {
    ...props
  }
}

function renderVideoDetail(props) {
  return render(<VideoDetail {...getProps(props)} />)
}

function mountVideoDetail(props) {
  return mount(<VideoDetail {...getProps(props)} />)
}

describe('VideoDetail', () => {
  it('exists', () => {
    expect(VideoDetail).to.exist
  })
  it('should render loading div with no video prop', () => {
    const wrapper = renderVideoDetail()
    expect(wrapper).to.include.text('Loading')
  })
  describe('With Video Prop', () => {
    let video
    let wrapper
    beforeEach(() => {
      video = {
        id: {
          videoId: 12
        },
        snippet: {
          description: 'Test Description',
          publishedAt: '2017-01-29T12:00:01.000Z',
          title: 'Test Video'
        }
      }
      wrapper = renderVideoDetail({ video })
    })
    it('should render VideoDetail with class video-detail with a video prop', () => {
      expect(VideoDetail).to.have.length(1)
      expect(wrapper).to.have.className('video-detail')
    })
    it('should render the video in a iframe', () => {
      const iframe = wrapper.find('iframe')
      const URL = `https://www.youtube.com/embed/${video.id.videoId}`
      expect(iframe).to.have.length(1)
      expect(iframe).to.have.attr('src').equal(URL)
    })
    it('should render description, publishedAt, and title', () => {
      expect(wrapper).to.include.text('Test Description')
      expect(wrapper).to.include.text('January 29th 2017')
      expect(wrapper).to.include.text('Test Video')
    })
  })
})
