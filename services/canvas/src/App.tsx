import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import Entry from './components/Entry';
import Drawing from './components/Drawing';
import { CanvasProvider } from './context/CanvasProvider';
import { WebSocketProvider } from './context/WebSocketProvider';

const baseName = '/everybody777-frontend/canvas';

function App() {
  return (
    <CanvasProvider>
      <WebSocketProvider>
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
      </WebSocketProvider>
    </CanvasProvider>
  );
}
export default App;
