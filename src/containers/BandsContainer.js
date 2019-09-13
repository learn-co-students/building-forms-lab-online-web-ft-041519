import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", band: band})
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
