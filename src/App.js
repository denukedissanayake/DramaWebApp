import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import CategoriesPage from './pages/CategoriesPage';
import RolesPage from './pages/RolesPage';
import AllCategoryItems from './pages/AllCategoryItemPage';

import MainNavigation from './components/Navigation/MainNavigation';

import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Switch> 
          <Route path="/" exact>
            <CategoriesPage/>
          </Route>

          <Route path="/:category/items" exact>
            <AllCategoryItems/>
          </Route>

          <Route path="/actors" exact>
            <RolesPage/>
          </Route>

          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
