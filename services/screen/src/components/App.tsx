import React from 'react';

import { sum } from '@package/sample';
import QRCode from './QRCode';
import Sketch from './Sketch';
import Easel from './Easel';
import FlexContainer from './FlexContainer';

console.log(sum(1, 2));

function App(): JSX.Element {
  return (
    <FlexContainer direction="row">
      <FlexContainer>
        <Sketch />
        <FlexContainer direction="row">
          <QRCode
            label="Canvas"
            url="https://hollysparty.github.io/everybody777-frontend/canvas/"
          />
          <QRCode
            label="Museum"
            url="https://hollysparty.github.io/everybody777-frontend/screen/"
          />
        </FlexContainer>
      </FlexContainer>
      <Easel />
    </FlexContainer>
  );
}

export default App;
