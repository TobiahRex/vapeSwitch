import React, { Component } from 'react'

import Mod from './Mod.js'

export default class ModsDisplay extends Component {
  render() {
    const { mods } = this.props
    console.log('mods: ', mods);
    const displayCard = mods.length && mods.map(mod => <Mod key={mod._id} mod={mod} />);
    return (
      console.log('displayCard: ', displayCard),
      <div className="container">
        <div className="row">
          {displayCard || 'No Mods To Display'}
        </div>
      </div>
    )
  }
}
