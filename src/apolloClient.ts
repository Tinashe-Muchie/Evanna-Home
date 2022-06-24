import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri:`https://api-us-east-1.graphcms.com/v2/${process.env.REACT_APP_API_KEY}/master`,
    cache: new InMemoryCache()
})

export default client;