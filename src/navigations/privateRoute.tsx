import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from 'views/private/Home';
import Team from 'views/private/Team';
import Learn from 'views/private/Learn';
import Curriculum from 'views/private/Curriculum';

import ProfileUser from 'compositions/ProfileUser';
import ProfileAccount from 'compositions/ProfileAccount';
import ProfileOrg from 'compositions/ProfileOrganization';
import ViewPageDetails from 'compositions/ViewPageDetails';

const Navigation = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route exact path="/home" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/learn" component={Learn} />
      <Route exact path="/learn/curriculum" component={Curriculum} />
      <Route exact path="/team/detail" component={ViewPageDetails} />
      <Route exact path="/profile/user" component={ProfileUser} />
      <Route exact path="/profile/account" component={ProfileAccount} />
      <Route exact path="/profile/organization" component={ProfileOrg} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
