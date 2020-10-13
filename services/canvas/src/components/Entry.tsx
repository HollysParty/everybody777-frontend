import React, { useState, useCallback } from 'react';
import SketchList from './SketchList';
import TileList from './TileList';

enum APP_MODE {
  SKETCH = 'SKETCH',
  TILE = 'TILE'
}

function Entry() {
  const [appMode, setAppMode] = useState(APP_MODE.SKETCH);

  const toggleAppMode = useCallback(() => {
    setAppMode((prevAppMode) =>
      prevAppMode === APP_MODE.SKETCH ? APP_MODE.TILE : APP_MODE.SKETCH
    );
  }, [setAppMode]);

  return (
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
  );
}

export default Entry;
