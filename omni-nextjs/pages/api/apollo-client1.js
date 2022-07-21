import { ApolloClient, InMemoryCache } from '@apollo/client'



const client1 = new ApolloClient({
    uri:'https://pro-component-express1o1.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});







export default client1;