import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import Mods from './components/Mods/Mods.js'
import Cart from './components/Cart/Cart.js'
import Checkout from './components/Checkout/Checkout.js'


render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="Mods" component={Mods} />
        <Route path="Cart" component={Cart} />
        <Route path="Checkout" component={Checkout} />
      </Route>
    </Router>,
  document.getElementById('js-main')
)
