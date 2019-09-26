// Add BandInput component
import React, { Component } from 'react'
import uuid from 'uuid';


class BandInput extends Component {

  state = {
    name:''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const band = { ...this.state, id: uuid() }
    this.props.addBand(band)
    this.setState({
      name:'',
    })
  } 

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
        <input className="form-control"
              type="text"
              value={this.state.name}
              onChange={this.handleOnChange}
              name="name"
        />
        </form>
      </div>
    )
  }
}

export default BandInput
