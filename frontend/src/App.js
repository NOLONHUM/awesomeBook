import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import './Variables.css';
import './App.css';

function App() {
  
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>Main Page</Route>
      <Route path="/cart" exact>Cart</Route>
      <Route path="/login" exact>Login</Route>
      <Redirect to="/" />
    </Switch>
  )
  
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>{routes}</main>
    </BrowserRouter>
  );
}

export default App;
