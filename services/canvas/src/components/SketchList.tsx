import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSketches } from '../api/getSketches';
import { BASE_URL } from '../const';

interface Sketch {
  id: string;
  imageUrl: string;
}

export default function SketchList() {
  const [sketches, setSketches] = useState<Sketch[]>([]);

  useEffect(() => {
    getSketches().then((data: Sketch[]) => setSketches(data));
  }, []);
  return (
    <ul>
      {sketches.map(({ id, imageUrl }) => (
        <li key={id}>
          <div>
            <p>id: {id}</p>
            <p>
              <Link to={`/paint/${id}`}>
                <img src={`${BASE_URL}/${imageUrl}`} alt={id} />
              </Link>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
