import React, { Component } from 'react'

import Mod from './Mod.jsx'

export default class ModsDisplay extends Component {
  render() {
    const { mods } = this.props
    const displayCard = mods.mods.length && mods.map(mod => <Mod key={mod._id} mod={mod} />);
    return (
      <div className="container">
        <div className="row">
          {displayCard || 'No Mods To Display'}
        </div>
      </div>
    )
  }
}
