import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="container">
          <span id='copyright-banner' class="copyright text-center col-xs-12">{'\u00a9 2016'}<span class="text-primary"> VapeSwitch</span></span>
        </div>
      </footer>
    )
  }
}

export default Footer
