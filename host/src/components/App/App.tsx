import React from 'react';
import {Router, Switch, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import s from './App.module.css';

// TODO: Expose this!
const history = createBrowserHistory();

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
