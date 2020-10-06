import React from 'react';

import { sum } from '@package/sample';
import QRCode from './QRCode';
import Sketch from './Sketch';

console.log(sum(1, 2));

function App(): JSX.Element {
  return (
    <div>
      <Sketch />
      <QRCode
        label="Canvas"
        url="https://hollysparty.github.io/everybody777-frontend/canvas/"
      />
      <QRCode
        label="Museum"
        url="https://hollysparty.github.io/everybody777-frontend/screen/"
      />
    </div>
  );
}

export default App;
