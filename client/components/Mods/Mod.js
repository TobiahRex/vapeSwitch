import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import CartActions from '../../actions/CartActions'

export default class Mod extends Component {
  constructor(props) {
    super(props);

    this.productClicked = this.productClicked.bind(this);
    this.generateButtonType = this.generateButtonType.bind(this);
  }
  productClicked(mod, type) {
    if (!mod) return (console.error('No mod information found'));

    if (type === 'Add To Cart'){
      CartActions.addLSCartItem(mod);
    } else {
      browserHistory.push(`mods/${mod._id}`);
    }
  }
  generateButtonType(mod){
    if (mod.options.style.length || mod.options.colors.length || mod.options.sizes.length) {
      return 'Select Options'
    } else {
      return 'Add To Cart'
    }
  }
  render(){
    let buttonText = this.generateButtonType(this.props.mod);
    console.log('button: ', buttonText);
    let { images, description } = this.props.mod;
    return (
      <div className="col-xs-3 col-xs-offset-1">
        <img id="mod-main-img" src={images[0]} role="presentation" />
        <br />
        <p id="mod-main-desc" className="lead">{description}</p>
        <br />
        <button className="btn btn-info" onClick={ () => this.productClicked(this.props.mod, buttonText)}>{buttonText}</button>
      </div>
    )
  }
}
