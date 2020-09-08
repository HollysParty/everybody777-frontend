import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { END_POINT_URL } from '../constants/graphql';

const GET_SKETCHES = gql`
  query {
    sketches {
      id
      imageUrl
    }
  }
`;

interface Sketch {
  id: string;
  imageUrl: string;
}

interface GetSketchesResult {
  sketches: Sketch[];
}

export default function SketchList() {
  const { data, error, loading } = useQuery<GetSketchesResult>(GET_SKETCHES);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || error) {
    return <p>Error!(</p>;
  }

  const { sketches } = data;

  return (
    <ul>
      {sketches.map(({ id, imageUrl }) => (
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
