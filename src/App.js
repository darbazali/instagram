import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'

const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h3>Loading..</h3>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={Signup} />
          <Route path={'*'} component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
// timestamp 59:00
