import React, { useState, useCallback } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { END_POINT_URL, END_POINT_PATH } from './constants/graphql';
import SketchList from './components/SketchList';
import TileList from './components/TileList';

const client = new ApolloClient({
  uri: `${END_POINT_URL}${END_POINT_PATH}`
});

enum APP_MODE {
  SKETCH = 'SKETCH',
  TILE = 'TILE'
}

function App() {
  const [appMode, setAppMode] = useState(APP_MODE.SKETCH);

  const toggleAppMode = useCallback(() => {
    setAppMode((prevAppMode) =>
      prevAppMode === APP_MODE.SKETCH ? APP_MODE.TILE : APP_MODE.SKETCH
    );
  }, [setAppMode]);

  return (
    <ApolloProvider client={client}>
      <div>
        <div>
          <p>mode: {appMode}</p>
          <p>
            <button type="button" onClick={toggleAppMode}>
              toggle mode
            </button>
          </p>
        </div>
        <div>
          {appMode === APP_MODE.SKETCH && <SketchList />}
          {appMode === APP_MODE.TILE && <TileList />}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
