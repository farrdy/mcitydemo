import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin/'
import Dashboard from './components/Admin/Dashboard';
import PrivateRoutes from './components/AuthRoutes/privateRoutes'
import PublicRoutes from './components/AuthRoutes/publicRoutes'
import AdminMatches from './components/Admin/matches/'
import AddEditMatch from './components/Admin/matches/addEditMatch'

const Routes = (props) => {

  console.log(props)
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
        {/* <Route exact component={Signin} path="/sign_in" /> */}
        <PublicRoutes {...props} path="/sign_in" restricted={true} exact component={Signin} />
        <PublicRoutes {...props} path="/" restricted={false} exact component={Home} />
        {/* <Route exact component={Home} path="/" /> */}
      </Switch>

    </Layout>

  )

}

export default Routes;