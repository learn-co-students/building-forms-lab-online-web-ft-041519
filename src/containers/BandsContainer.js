import React, { Component } from 'react'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <ul>
        {state.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default BandsContainer
