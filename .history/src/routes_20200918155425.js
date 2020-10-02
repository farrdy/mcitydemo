import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin/index'
const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Signin} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>

    </Layout>

  )

}

export default Routes;