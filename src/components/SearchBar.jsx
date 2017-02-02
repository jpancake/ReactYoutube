import React, { Component, PropTypes } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this._onInputSubmit = this._onInputSubmit.bind(this)
    this._handleChange = this._handleChange.bind(this)
  }

  _onInputSubmit(e) {
    e.preventDefault()
    this.props.onInputSubmit(this.state.term)
    this.setState({ term: '' })
  }

  _handleChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return (
        <form onSubmit={this._onInputSubmit} className="search-bar">
          <input
            type="search"
            value={this.state.term}
            onChange={this._handleChange}
          />
        </form>
    )
  }
}

SearchBar.propTypes = {
  onInputSubmit: PropTypes.func.isRequired
}
