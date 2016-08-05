import React, { Component } from 'react'
import countries from './countryConstants'
import uuid from 'uuid'

class CountrySelector extends Component {
  render() {
    console.log('countries: ', countries);
    let countryOptions = countries.map(countryObj =>
      <option key={uuid()} data-code={countryObj.code} value={countryObj.name}>{countryObj.name}</option>
    );
    return (
      <div className="customer-info-country-container">
      <select name="" id="select" className="form-control customer-info customer-info-country">
        {countryOptions}
      </select>
      </div>
    )
  }
}

export default CountrySelector
