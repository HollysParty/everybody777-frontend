import React, { useState, useEffect } from 'react';
import { getTiles } from '../api/getTiles';
import { BASE_URL } from '../const';

interface Tile {
  id: number;
  imageUrl: string;
}
export default function TileList() {
  const [tiles, setTiles] = useState<Tile[]>([]);

  useEffect(() => {
    getTiles().then((data: Tile[]) => setTiles(data));
  }, []);

  return (
    <ul>
      {tiles.map(({ id, imageUrl }) => (
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
