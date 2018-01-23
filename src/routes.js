import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ItemsPage from './components/items/ItemsPage';
import ManageItemPage from './components/items/ManageItemPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/items" component={ItemsPage}/>
    <Route path="/item" component={ManageItemPage}/>
    <Route path="/item/:id" component={ManageItemPage}/>
    <Route path="/about" component={AboutPage}/>
  </Route>
);