import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Expense from '../expense/expense'


export default props => (
  <Router history={hashHistory}>
    <Route path='/expense' component={Expense} />
  </Router>
)
