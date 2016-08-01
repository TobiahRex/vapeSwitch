import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Mods from './components/Mods/Mods.jsx'
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'

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
  document.getElementById('root')
)
