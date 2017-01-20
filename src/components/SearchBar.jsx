import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this._onInputSubmit = this._onInputSubmit.bind(this)
  }

  _onInputSubmit(e) {
    e.preventDefault()
    this.props.onInputSubmit(this.state.term)
  }

  render() {
    return (
        <form onSubmit={this._onInputSubmit} className="search-bar">
          <input
            type="text"
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })}
          />
        </form>
    )
  }
}
