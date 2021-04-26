import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'

import useAuthListener from './hooks/use-auth-listener'
import UserContext from './context/user'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  const { user } = useAuthListener()
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<h3>Loading..</h3>}>
          <Switch>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Signup} />
            <Route path={'*'} component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App
// timestamp 59:00
