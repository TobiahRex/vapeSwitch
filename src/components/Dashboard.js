import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Welcome to Managed Properties!</h1>
        <h3>What would you like to do?</h3>
      </div>
    )
  }
}
