import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api-us-east-1.graphcms.com/v2/cl4qv02r4077301z383zi5brg/master',
    cache: new InMemoryCache(),
})

export default client;