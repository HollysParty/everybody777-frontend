import React from 'react';

import { sum } from '@package/sample';
import QRCode from 'qrcode.react';
import Sketch from './Sketch';

console.log(sum(1, 2));

function App(): JSX.Element {
  return (
    <div>
      <QRCode value="https://github.com/HollysParty/everybody777-frontend" />
      <Sketch />
    </div>
  );
}

export default App;
