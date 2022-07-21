import { ApolloClient, InMemoryCache } from '@apollo/client'



const client = new ApolloClient({
    uri:'https://pro-component-django1o1.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});







export default client;