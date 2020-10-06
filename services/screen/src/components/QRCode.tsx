import React from 'react';
import NativeQRCode from 'qrcode.react';

interface Props {
  url: string;
  label: string;
}

export default function QRCode({ url, label }: Props): JSX.Element {
  return (
    <div>
      <div>
        <NativeQRCode value={url} />
      </div>
      <div>
        <label>{label}</label>
      </div>
    </div>
  );
}
