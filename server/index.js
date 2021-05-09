const { ApolloServer } = require('apollo-server');
// type definitions:
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const EarthquakeAPI = require('./datasources/earthquake');

// const server = new ApolloServer({ typeDefs });
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        earthquakeAPI: new EarthquakeAPI()
    })
});

// server.listen().then(() => {
//     console.log(`
//         Server is running!
//         Listening on port: 4000
//         Explore at https://studio.apollographql.com/dev
//     `);
// });

server.listen().then(({ url }) => {
    console.log(`
        🚀 Server is running!
        Listening at: ${url}
        Explore at https://studio.apollographql.com/dev
    `);
});
