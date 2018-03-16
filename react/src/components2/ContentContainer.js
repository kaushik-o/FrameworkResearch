import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'

const ContentContainer = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </main>
);

export default ContentContainer;
