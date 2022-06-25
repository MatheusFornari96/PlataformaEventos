import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4t5xqqk2z7h01z1aaiaacn4/master',
    cache: new InMemoryCache()
})