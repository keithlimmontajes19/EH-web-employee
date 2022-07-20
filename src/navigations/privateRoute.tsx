import React from 'react';
import {Route} from 'react-router-dom';

import Home from 'views/private/Home';
import Team from 'views/private/Team';
import Learn from 'views/private/Learn';
import Curriculum from 'views/private/Curriculum';

import ProfileUser from 'compositions/ProfileUser';
import ProfileAccount from 'compositions/ProfileAccount';
import ProfileOrg from 'compositions/ProfileOrganization';
import ViewPageDetails from 'compositions/ViewPageDetails';

const Navigation = () => {
  return <></>

  // <Switch>
  //   <Route path="/" component={Home} />
  //   <Route path="/home" component={Home} />
  //   <Route path="/team" component={Team} />
  //   <Route path="/learn" component={Learn} />
  //   <Route path="/learn/curriculum" component={Curriculum} />
  //   <Route path="/team/detail" component={ViewPageDetails} />
  //   <Route path="/profile/user" component={ProfileUser} />
  //   <Route path="/profile/account" component={ProfileAccount} />
  //   <Route path="/profile/organization" component={ProfileOrg} />
  //   <Redirect to="/" />
  // </Switch>
}

export default Navigation;
