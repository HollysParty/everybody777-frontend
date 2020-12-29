import React, { useState, useEffect } from 'react';
import { getSketches } from '../api/getSketches';
import { BASE_URL } from '../const';
import { ImageInfo } from '../types';

export default function SketchList() {
  const [sketches, setSketches] = useState<ImageInfo[]>([]);

  useEffect(() => {
    getSketches().then((data: ImageInfo[]) => setSketches(data));
  }, []);
  return (
    <ul>
      {sketches.map(({ id, imageUrl }) => (
        <li key={id}>
          <div>
            <p>id: {id}</p>
            <p>
              <img src={`${BASE_URL}/${imageUrl}`} alt={'' + id} />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
