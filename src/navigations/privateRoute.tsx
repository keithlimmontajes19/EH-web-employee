import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from 'views/private/Home';
import Team from 'views/private/Team';
import Learn from 'views/private/Learn';
import Curriculum from 'views/private/Curriculum';

const Navigation = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} />
      <Route path="/team" component={Team} />
      <Route exact path="/learn" component={Learn} />
      <Route exact path="/learn/curriculum" component={Curriculum} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
