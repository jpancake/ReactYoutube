/* eslint no-shadow: 0 */
/* globals describe, it, expect, beforeEach */
/* eslint no-unused-expressions: 0 */

import React from 'react'
import { render, mount } from 'enzyme'
import dateFormat from 'dateformat'

import VideoDetail from '../../src/components/VideoDetail'

function getProps(props) {
  return {
    video: {
      id: {
        videoId: 'r3P9PHneO_8'
      },
      snippet: {
        description: 'Test Description',
        publishedAt: '2017-01-29T12:00:01.000Z',
        title: 'Test Video'
      }
    },
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
    const wrapper = render(<VideoDetail />)
    expect(wrapper).to.include.text('Loading')
  })
  describe('With Video Prop', () => {
    let wrapper
    beforeEach(() => {
      wrapper = renderVideoDetail()
    })
    it('should render VideoDetail with class video-detail with a video prop', () => {
      expect(VideoDetail).to.have.length(1)
      expect(wrapper).to.have.className('video-detail')
    })
    it('should render the video in a iframe', () => {
      const wrapper = mountVideoDetail()
      const iframe = wrapper.find('iframe')
      const { videoId } = wrapper.props().video.id
      const URL = `https://www.youtube.com/embed/${videoId}`

      expect(iframe).to.have.length(1)
      expect(iframe).to.have.attr('src').equal(URL)
    })
    it('should render description, publishedAt, and title from Props', () => {
      const wrapper = mountVideoDetail()
      const { snippet: { description, publishedAt, title } } = wrapper.props().video
      const formattedDate = dateFormat(publishedAt, 'mmmm dS yyyy')
      expect(wrapper).to.include.text(description)
      expect(wrapper).to.include.text(formattedDate)
      expect(wrapper).to.include.text(title)
    })
  })
})
