import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an HTTP link to connect to the GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Update with your GraphQL server URL
});

// Set up the authentication link to attach tokens to requests
const authLink = setContext((_, { headers }) => {
  // Retrieve the token from localStorage (if you're using JWT for authentication)
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create the Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Combine auth and HTTP links
  cache: new InMemoryCache(), // Use Apollo's in-memory cache for caching data
});

export default client;
