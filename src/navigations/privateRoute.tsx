import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from 'views/private/Home';
import Learn from 'views/private/Learn';
import Team from 'views/private/Team';
import Curriculum from 'views/private/Curriculum';

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route exact path="/learn" component={Learn} />
      <Route exact path="/learn/curriculum" component={Curriculum} />
      <Route path="/team" component={Team} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
