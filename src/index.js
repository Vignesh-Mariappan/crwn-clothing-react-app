import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/* Provider is a component from react redux library used for redux. It simply wraps the entire application so that it will have access to all the child components */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import store from './redux/store';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <Provider store = { store }>
    <BrowserRouter>
    <PersistGate persistor = { persistor }>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
