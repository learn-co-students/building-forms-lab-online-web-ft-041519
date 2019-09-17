// Add BandInput component
import React, { Component } from 'react'



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
    const band = { ...this.state}
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

export default BandInput
