import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Notiflix from "notiflix";

import MainNavigation from './shared/components/Navigation/MainNavigation';
import './App.scss';
import Shop from './Shop/pages/Shop';

function App() {
  let routes;

  useEffect(() => {
    Notiflix.Notify.Init({
      position:"right-bottom"
    }); 
  }, []);

  routes = (
    <Switch>
      <Route path="/" exact><Shop /></Route>
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
