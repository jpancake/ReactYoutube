/* globals describe, it, expect, beforeEach */
/* eslint no-unused-expressions: 0 */

import React from 'react'
import { render, mount } from 'enzyme'

import SearchBar from '../../src/components/SearchBar'

function getProps(props = {}) {
  return {
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
  it('renders a input with class search-bar', () => {
    const wrapper = renderSearchBar()
    expect(SearchBar).to.have.length(1)
    expect(wrapper).to.have.className('search-bar')
  })
  describe('OnChange event', () => {
    let wrapper
    let spy
    beforeEach(() => {
      wrapper = mountSearchBar()
      wrapper.find('input').simulate('change', { target: { value: 'testing' } })
    })
    it('shows text input on input change ', () => {
      expect(wrapper.find('input')).to.have.value('testing')
    })
    it('changes state "term" on input change', () => {
      expect(wrapper).to.have.state('term').equal('testing')
    })
    it('empties search input on submit', () => {
      const exampleFunc = (term) => {
        return term
      }
      wrapper.setProps({ onInputSubmit: exampleFunc })
      wrapper.simulate('submit')
      expect(wrapper.find('input')).to.have.value('')
    })
  })
})
