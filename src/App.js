import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop/shop-page.component';
import HomePage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Route  path = '/shop' component = { ShopPage } />
      <Route exact={true} path = '/' component = { HomePage } />
    </div>
  );
}

export default App;
