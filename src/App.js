import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Route  path = '/shop/hats' component = { HatsPage } />
      <Route exact={true} path = '/' component = { HomePage } />
    </div>
  );
}

export default App;
