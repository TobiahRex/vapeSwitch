import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="text-center">
        <img id="dashboard-jumbotron" src="client/styles/images/vapeswitch_blank.png" />
        <h3><i>Make the Switch</i></h3>

      <ul className="nav nav-pills">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Profile</a></li>
          <li className="disabled"><a href="#">Disabled</a></li>
          <li className="dropdown open">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="true">
              Dropdown <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>)
  }
}
