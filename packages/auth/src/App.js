import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles'

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})


export default ({ history }) => {
  // One way is creating a history object and passing it to Router component
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin' component={Signin} />
            <Route path='/auth/signup' component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
} 
