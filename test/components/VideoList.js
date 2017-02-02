/* globals describe, it, expect, beforeEach */
/* eslint no-unused-expressions: 0 */

import React from 'react'
import { render, mount } from 'enzyme'

import VideoList from '../../src/components/VideoList'
import VideoListItem from '../../src/components/VideoListItem'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyB0NGuGw308FN3TpLmDv6AOFmn8OWSLVCk'

function getProps(props) {
  return {
    videos: [
      {
        id: {
          videoId: 12
        },
        snippet: {
          description: 'Test Description',
          publishedAt: '2017-01-29T12:00:01.000Z',
          title: 'Test Video',
          thumbnails: {
            default: {
              url: 'testurl'
            }
          }
        }
      },
      {
        id: {
          videoId: 14
        },
        snippet: {
          description: 'Test Description',
          publishedAt: '2017-01-29T12:00:01.000Z',
          title: 'Test Video',
          thumbnails: {
            default: {
              url: 'testurl'
            }
          }
        }
      },
      {
        id: {
          videoId: 13
        },
        snippet: {
          description: 'Test Description',
          publishedAt: '2017-01-29T12:00:01.000Z',
          title: 'Test Video',
          thumbnails: {
            default: {
              url: 'testurl'
            }
          }
        }
      }
  ],
    ...props
  }
}

function renderVideoList(props) {
  return render(<VideoList {...getProps(props)} />)
}

function mountVideoList(props) {
  return mount(<VideoList {...getProps(props)} />)
}

describe('VideoList/VideoListItem', () => {
  it('exists', () => {
    expect(VideoList).to.exist
    expect(VideoListItem).to.exist
  })
  describe('w/ videos prop ready', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mountVideoList()
    })
    it('renders VideoList with a class of video-list', () => {
      expect(VideoList).to.have.length(1)
      expect(wrapper).to.have.className('video-list')
    })
    it('renders VideoListItem with class list-group-item', () => {
      expect(wrapper).to.have.descendants('.list-group-item')
      expect(VideoListItem).to.have.length(1)
    })
  })
})

