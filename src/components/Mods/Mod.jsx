import React, { Component } from 'react'

import ProductActions from '../../actions/ProductActions'

// TODO Mod Button type
// Find  a way to dynamically generate either a <button> that adds to the LS cigarettes
// OR generates a <a className='btn'> that will send them to the details product page.


export default class Mod extends Component {

  constructor(props) {
    super(props);

    this.state = {
      type: '',
      options: [],
    }
    this.productClicked = this.productClicked.bind(this);
  }

  productClicked (product) {
    if (!product) return (console.error('No product information found'));
    if (this.state.type === 'Add To Cart') {
      ProductActions.addLSCart(product);
      return this.setState({ type: '', options: [] });
    }
  }

  buttonType(options) {
    if (!options) return (<p>TYPE ERROR</p>);
    if (options.length) {
      this.setState({ options, type: 'Select Options' });
    }
    this.setState({ type: 'Add To Cart' });
    return this.state.type;
  }

  render() {
    const product = this.props.mod
    const { description, image, options } = this.props;
    return (
      <div className="col-xs-3 col-xs-offset-1">
        <img src={image} role="presentation" />
        <br />
        <p className="lead">{description}</p>
        <br />
        <p>
          <button
            onClick={this.productClicked(product, this.state.type)}
            className="btn btn-info">
            {this.buttonType(options)}
          </button>
        </p>
      </div>
    )
  }
}
