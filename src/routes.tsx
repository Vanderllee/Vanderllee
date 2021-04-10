import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';

import NavBar from './components/NavBar';
import Home from './pages/Home/index';
import Contato from './pages/Contato/index';
import Portfolio from './pages/Portfolio/index';
import Cursos from './pages/Cursos/index';

const Routes: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" component={Contato} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/cursos" component={Cursos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
