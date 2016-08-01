import React, { Component } from 'react'
export default class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      body: '',
      copy: true,
    }
  }

  render() {
    return (

      <div className="col-xs-8 col-xs-offset-2 container">
        <br />
        <form action="">
          <div className="form-group row col-xs-6 col-xs-offset-3">
            <label htmlFor="contact-name">Your Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              id="contact-name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.taget.value })}
              />
          </div>

          <div className="form-group col-xs-6 col-xs-offset-3">
            <label htmlFor="contact-email">Your Email</label>
            <input
              type="text"
              placeholder="tony.stark@gmail.com"
              className="form-control"
              id="contact-email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.taget.value })}
              />
          </div>

          <div className="form-group">
            <textarea
              value={this.state.body}
              onChange={e => this.setState({ body: e.target.value })}
              className="form-control"
              id="contact-email-body"
              cols="25"
              rows="15"></textarea>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Copy Sent To Your Email?</label>
            <div className="col-lg-10">
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="contact-email-copy"
                    id="email-copy-checkbox"
                    value={this.state.copy} />
                  Yes
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
