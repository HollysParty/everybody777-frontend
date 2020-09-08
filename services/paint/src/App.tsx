import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import SketchList from './SketchList';
import { END_POINT_URL, END_POINT_PATH } from './constants/graphql';

const client = new ApolloClient({
  uri: `${END_POINT_URL}${END_POINT_PATH}`
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <SketchList />
      </div>
    </ApolloProvider>
  );
}

export default App;
