import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import CartActions from '../../actions/CartActions'
import toastr from 'toastr'

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
      toastr.success(`${mod.title}

        as added to your cart`, 'Added To Cart');
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
    let { images, description, title, model } = this.props.mod;
    return (
      <div className="col-xs-3 col-xs-offset-1">
        <h3>{title} <br /> {model}</h3>
        <img id="mod-main-img" src={images[0]} role="presentation" />
        <hr />
        <p id="mod-main-desc" className="lead">{description}</p>
        <hr />
        <button className="btn btn-info" onClick={ () => this.productClicked(this.props.mod, buttonText)}>{buttonText}</button>
      </div>
    )
  }
}
