import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import Entry from './components/Entry';
import Drawing from './components/Drawing';

const baseName = '/everybody777-frontend/canvas';

function App() {
  return (
    <Router basename={baseName}>
      <Switch>
        <Route
          exact
          path="/paint/:id"
          render={({ match }) => <Drawing id={match.params.id} />}
        />
        <Route exact path="/" component={Entry} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
