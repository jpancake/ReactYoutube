/* globals describe, it, expect, beforeEach, afterEach */
/* eslint no-unused-expressions: 0 */

import React from 'react'
import { render, mount } from 'enzyme'
import sinon from 'sinon'

import SearchBar from '../../src/components/SearchBar'

function getProps(props = {}) {
  return {
    onInputSubmit() {
      // Filler
    },
    ...props
  }
}

function renderSearchBar(props) {
  return render(<SearchBar {...getProps(props)} />)
}

function mountSearchBar(props) {
  return mount(<SearchBar {...getProps(props)} />)
}

describe('SearchBar', () => {
  it('exists', () => {
    expect(SearchBar).to.exist
  })
  it('renders SearchBar with class search-bar', () => {
    const wrapper = renderSearchBar()
    expect(SearchBar).to.have.length(1)
    expect(wrapper).to.have.className('search-bar')
  })
  it('has a input with type search', () => {
    const wrapper = renderSearchBar()
    expect(wrapper.find('input[type=search]')).to.have.length(1)
  })
  describe('events', () => {
    let wrapper
    let spy
    let spy2
    beforeEach(() => {
      spy = sinon.spy(SearchBar.prototype, '_handleChange')
      spy2 = sinon.spy(SearchBar.prototype, '_onInputSubmit')
      wrapper = mountSearchBar()
      wrapper.find('input').simulate('change', { target: { value: 'testing' } })
    })
    afterEach(() => {
      SearchBar.prototype._handleChange.restore()
      SearchBar.prototype._onInputSubmit.restore()
    })
    it('calls _handleChange prototype', () => {
      expect(spy).to.have.been.calledOnce
    })
    it('shows text input on input change ', () => {
      expect(wrapper.find('input')).to.have.value('testing')
    })
    it('changes state "term" on input change', () => {
      expect(wrapper).to.have.state('term').equal('testing')
    })
    it('empties search input on submit', () => {
      wrapper.simulate('submit')
      expect(wrapper.find('input')).to.have.value('')
    })
    it('calls onInputSubmit on submit', () => {
      wrapper.simulate('submit')
      expect(spy2).to.have.been.calledOnce
    })
  })
})
