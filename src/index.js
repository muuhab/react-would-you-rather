import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css'
import {createStore,applyMiddleware} from 'redux'
import reducer from "./reducers";
import logger from "redux-logger";
import thunk  from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


