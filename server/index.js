const { ApolloServer } = require('apollo-server');
// type definitions:
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { createStore } = require('./utils');

const EarthquakeAPI = require('./datasources/earthquake');
const UserAPI = require('./datasources/user');

const store = createStore(); //save the createStore function to a variable store

// const server = new ApolloServer({ typeDefs });
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        earthquakeAPI: new EarthquakeAPI(),
        userAPI: new UserAPI({ store }) //create a new instance of our UserAPI and pass into it the store
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
