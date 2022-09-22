
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './app/store';

import {AuthContextProvider} from "./context/AuthContext"

import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

