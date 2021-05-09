const { gql } = require('apollo-server');

// our schema will go here below between the backticks: using the schema definition language
const typeDefs = gql`
# ! --> means non-nullible --> which means it's required
    type Query {
        # Get a list of quakes:
        earthquakes: [Earthquake]!
        earthquake(id: ID!): Earthquake
        # Queries for the current user:
        me: User
    }
    type Earthquake {
        id: ID!
        location: String
        magnitude: Float
        when: String
        time: String
    }
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        records: [Earthquake]!
    }
    type Mutation {
        # if false, saving record failed -- check errors
        # single record: ID , multiple records: [ID] --> array of records
        saveRecord(recordId: ID!): RecordUpdateResponse!

        # if false, deleting record failed -- check errors
        deleteRecord(recordId: ID!): RecordUpdateResponse!

        login(email: String): User # login token
    }
    type RecordUpdateResponse {
        success: Boolean!
        message: String
        records: [Earthquake]
    }
`;

module.exports = typeDefs;