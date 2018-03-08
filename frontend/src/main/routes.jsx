import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Clients from '../clients/clients'
import About from '../about/about'

export default props => (
  <Router history={hashHistory}>
    <Route path='/clients' component={Clients} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/clients' />
  </Router>
)
