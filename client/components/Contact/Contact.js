import React, { Component } from 'react'

import ContactForm from './ContactForm.jsx'

export default class Properties extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Contact</h1>
        <ContactForm />
      </div>
    )
  }
}
