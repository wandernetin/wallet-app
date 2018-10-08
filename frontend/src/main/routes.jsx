import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Expense from '../expense/expense'
import Client from '../clients/clients'
import Dashboard from '../dashboard/dashboard'



export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/expense' component={Expense} />
    <Route path='/client' component={Client} />
  </Router>
)
