import React, { useState, useCallback } from 'react';
import SketchList from './SketchList';
import TileList from './TileList';

//TODO: transpile이후에 즉시실행함수로 만들어 tree shaking에 걸러지지 않음 및 reverse map을 만듬의 이유로 const enum으로 바꾸려고 했지만 compile error
enum APP_MODE {
  SKETCH = 'SKETCH',
  TILE = 'TILE'
}

function Entry() {
  const [appMode, setAppMode] = useState<APP_MODE>(APP_MODE.SKETCH);

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
