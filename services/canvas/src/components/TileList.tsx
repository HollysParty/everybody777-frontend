import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { END_POINT_URL } from '../constants/graphql';

const GET_TILES = gql`
  query {
    tiles {
      id
      imageUrl
    }
  }
`;

interface Tile {
  id: string;
  imageUrl: string;
}

interface GetTilesResult {
  tiles: Tile[];
}

export default function TileList() {
  const { data, error, loading } = useQuery<GetTilesResult>(GET_TILES);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || error) {
    return <p>Error!(</p>;
  }

  const { tiles } = data;

  return (
    <ul>
      {tiles.map(({ id, imageUrl }) => (
        <li key={id}>
          <div>
            <p>id: {id}</p>
            <p>
              <img src={`${END_POINT_URL}${imageUrl}`} alt={id} />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
