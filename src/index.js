/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadItems} from './actions/itemActions';
import {loadUsers} from './actions/userActions';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadItems());
store.dispatch(loadUsers());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);