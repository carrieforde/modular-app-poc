// @ts-ignore
import { setInitTime, useInitialized } from 'host/redux';
// @ts-ignore
import { history } from 'host/services';
import React, { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import ToDo from '../ToDo/List';

// @ts-ignore
import {Initialized} from 'host/Initialized';


function App() {
  const basePath = '/todo';
  const initTime = useInitialized();

  useEffect(() => {
    if (!initTime) {
      setInitTime()
    }
  }, [initTime])

  return (
    <Router history={history}>
      <nav>
        <Link to={basePath}>Pending Items</Link>
        <Link to={`${basePath}/completed`}>Completed Items</Link>
      </nav>

     {initTime && <pre>
        The To Do app init instancing using only the <code>useInitialized</code> hook: {initTime}
      </pre>}


      <Switch>

      <Route exact path={basePath}>
        <ToDo />
      </Route>

      <Route path={`${basePath}/completed`}>
        These are completed todo items.

        Let's double check that store init time! This uses the host <code>Initialized</code> component: <Initialized />
      </Route>
      </Switch>
    </Router>

      
  );
}

export default App;
