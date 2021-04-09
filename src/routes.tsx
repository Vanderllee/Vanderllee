import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home/index';
import Contato from './pages/Contato/index';

const Routes: React.FC = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" component={Contato} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
