import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin/'
import Dashboard from './components/Admin/Dashboard';
import PrivateRoutes from './components/AuthRoutes/privateRoutes'
import PublicRoutes from './components/AuthRoutes/publicRoutes'
const Routes = (props) => {

  console.log(props)
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <Route exact component={Signin} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>

    </Layout>

  )

}

export default Routes;