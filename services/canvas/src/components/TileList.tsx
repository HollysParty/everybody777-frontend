import React, { useState, useEffect } from 'react';
import { getTiles } from '../api/getTiles';
import { BASE_URL } from '../const';
import { Link } from 'react-router-dom';
import { ImageInfo } from '../types';

export default function TileList() {
  const [tiles, setTiles] = useState<ImageInfo[]>([]);

  useEffect(() => {
    getTiles().then((data: ImageInfo[]) => setTiles(data));
  }, []);

  return (
    <ul>
      {tiles.map(({ id, imageUrl }) => (
        <li key={id}>
          <div>
            <p>id: {id}</p>
            <p>
              <Link to={`/paint/${id}`}>
                <img src={`${BASE_URL}/${imageUrl}`} alt={'' + id} />
              </Link>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
