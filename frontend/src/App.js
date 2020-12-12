import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notiflix from 'notiflix';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import './App.scss';
import Shop from './Shop/pages/Shop';
import AddItem from './Admin/pages/addItem';

function App() {
  let routes;

  useEffect(() => {
    Notiflix.Notify.Init({
      position:"right-bottom"
    }); 
  }, []);

  routes = (
    <Switch>
      <Route path="/cart" exact>Cart</Route>
      <Route path="/login" exact>Login</Route>
      <Route path="/additem" exact><AddItem /></Route>
      <Route path="/:page" exact><Shop /></Route>
      <Route path="/" exact><Shop /></Route>
    </Switch>
  );
  
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>{routes}</main>
    </BrowserRouter>
  );
}

export default App;
