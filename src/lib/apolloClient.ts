import {ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";


const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('auth-token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});