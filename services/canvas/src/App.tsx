import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { END_POINT_PATH, END_POINT_URL } from './constants/graphql';
import Entry from './components/Entry';
import Drawing from './components/Drawing';

const client = new ApolloClient({
  uri: `${END_POINT_URL}${END_POINT_PATH}`
});
const baseName = '/everybody777-frontend/canvas';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router basename={baseName}>
        <Switch>
          <Route exact path="/paint/:id" component={Drawing} />
          <Route exact path="/" component={Entry} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
export default App;
