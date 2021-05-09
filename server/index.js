const { ApolloServer } = require('apollo-server');
// type definitions:
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });