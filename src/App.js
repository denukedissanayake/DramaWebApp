import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import CategoriesPage from './pages/Items/CategoriesPage';
import RolesPage from './pages/Items/RolesPage';
import AllCategoryItems from './pages/Items/AllCategoryItemPage';
import AuthPage from './pages/Users/AuthPage';
import AddItemPage from './pages/Forms/AddItemPage';

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

          <Route path="/addItems" exact>
            <AddItemPage/>
          </Route>

          <Route path="/auth" exact>
            <AuthPage/>
          </Route>

          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
