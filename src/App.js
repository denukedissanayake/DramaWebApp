import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import CategoriesPage from './pages/CategoriesPage';
import RolesPage from './pages/RolesPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <CategoriesPage/>
        </Route>

        <Route path="/roles" exact>
          <RolesPage/>
        </Route>

        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
