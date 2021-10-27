import React from 'react';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';
// @ts-ignore
import { TodoApp } from 'todo/components';
import { Forbidden, Login } from '..';
import { useAuth } from '../../redux';
import { history } from '../../services';
import s from './App.module.css';

function App() {
  const auth = useAuth();

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

            <Route path="/todo" render={({location}) => auth ? <TodoApp /> : <Redirect to={{pathname: "/login", state: {from:location}}} />} />

            <Route path="/login">
              
              <Forbidden />
                <Login />
            </Route>
          </Switch>
      </main>
      </div>
    </Router>
  );
}

export default App;
