// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const band = { ...this.state, id: uuid() }
    this.props.addBand(band)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange}></input>
          <button type="submit" className="btn btn-default">Add</button>
        </form>
      </div>
    )
  }
}

export default connect({ addBand })(BandInput)
