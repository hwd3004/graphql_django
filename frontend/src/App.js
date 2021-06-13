import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { UserInfo, CreateUser } from './User'

const client = new ApolloClient({
  // graph 서버 주소 지정
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          backgroundColor: '#00000008',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <h2>
          아폴로 앱
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>

        <CreateUser></CreateUser>
        <UserInfo></UserInfo>
      </div>
    </ApolloProvider>
  )
}

export default App
