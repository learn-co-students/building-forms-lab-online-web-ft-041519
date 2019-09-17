import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'

class BandsContainer extends Component {
  render() {
    console.log("bands container props: ", this.props)
    return(
      <div>
        <h1>Bands Container</h1>
        <BandInput addBand={this.props.addBand}/>
        <ul>
        {this.props.bands.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands
})

export default connect(mapStateToProps, { addBand })(BandsContainer)
