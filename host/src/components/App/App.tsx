import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { history } from '../../services';
import Initialized from '../Initialized/Initialized';
import s from './App.module.css';

function App() {
  return (
    <Router history={history}>
      <div className={s.site}>
        <header className={s.siteHeader}>
          <p>Modular Application POC</p>
          <nav className={s.siteNav}>
            <Link to="/">Home</Link>
            <Link to="/todo">To Do</Link>
          </nav>
        </header>

      <main className={s.main}>
          <Switch>
            <Route exact path="/">
              This is the host application

              <Initialized />
            </Route>

            <Route path="/todo">
              ToDo goes here
            </Route>
          </Switch>
      </main>
      </div>
    </Router>
  );
}

export default App;
