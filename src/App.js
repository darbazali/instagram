import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'

const Login = lazy(() => import('./pages/Login'))
const App = () => {
  return (
    <Router>
      <Suspense fallback={<h3>Loading..</h3>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
// timestamp 59:00
