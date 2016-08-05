import React, { Component } from 'react'
import states from './statesConstants'
import uuid from 'uuid'

export default class StateSelector extends Component {
  render() {
    let stateOptions = states.map(stateObj =>
      <option key={uuid()} data-abbrev={stateObj.abbreviation} value={stateObj.name}>{stateObj.name}</option>
    );
    return(
      <div className="form-group form-control customer-info customer-info-state-container">
      <label id="select-state-label" htmlFor="select-state" className="text-muted">State</label>
      <select id="select-state" className="form-control customer-info customer-info-state">
      {stateOptions}
      </select>
      </div>
    )
  }
}
