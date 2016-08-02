import React, { Component } from 'react'

import Mod from './Mod.jsx'

export default class ModsDisplay extends Component {

  constructor(props) {
    super(props);

    this.renderMods = this.renderMods.bind(this);
  }

  renderMods() {
    const { mods } = this.props
    const cards = mods.mods.length && mods.map(mod => <Mod key={mod._id} mod={mod} />);
    return cards;
  }

  render() {
    const displayCard = this.renderMods();
    return(
      <div className="container">
        <div className="row">
          {displayCard || 'No Mods To Display'}
        </div>
      </div>
    )
  }
}
