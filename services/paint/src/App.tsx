import React from 'react';
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"
import {gql} from "apollo-boost"
import {Query, QueryResult} from "react-apollo"

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
})

const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`

type Continents = {
  continents: {
    code: string
    name: string
  }[]
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <p>This is paint client</p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Query query={GET_CONTINENTS}>
          {
            (result: QueryResult<Continents, Record<string, any>>) => {
              const {loading, error, data} = result;
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error!(</p>
              return (
                <ul>
                  {data && data.continents.map(({code, name}) => (
                    <li key={code}>{name}</li>
                  ))}
                </ul>
              )
            }
          }

        </Query>
      </div>
    </ApolloProvider>
  );
}

export default App;
