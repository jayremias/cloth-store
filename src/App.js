import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAnsSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/signin' component={SignInAnsSignOut} />
      </Switch>
    </div>
  );
}

export default App;
