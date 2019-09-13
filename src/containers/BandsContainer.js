import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';
import {addBand} from '../actions/bands'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={addBand}/>
      </div>
    )
  }
}


export default connect(state => ({bands: state.bands}), { addBand })(BandsContainer)
