import React, { Component } from 'react'

export default class Mod extends Component {

  constructor(props) {
    super(props);

    this.renderMod = this.renderMod.bind(this);
  }

  renderMod() {
    
  }

  render() {
    let { _id, title, description, options } = this.renderMod();
    return(
      <div className="col-xs-3 col-xs-offset-1">
        {mod}
      </div>
    )
  }
}
