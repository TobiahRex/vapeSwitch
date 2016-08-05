import React, { Component } from 'react'
import countries from './countryConstants'
import uuid from 'uuid'

class CountrySelector extends Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    let countryOptions = countries.map(countryObj =>
      <option key={uuid()} data-code={countryObj.code} value={countryObj.name}>{countryObj.name}</option>
    );
    return (
      <div className="form-group form-control customer-info customer-info-country-container">
      <label id="select-country-label" htmlFor="select-country" className="text-muted">Country</label>
      <select id="select-country" className="form-control customer-info customer-info-country" onChange={e => this.setState({ country: e.target.value })} onClick={this.submitCountry} >
      {countryOptions}
      </select>
      </div>
    )
  }
}

export default CountrySelector
