const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
    constructor({ store }) {
        //the store is where we keep copies of our important data sets
        // won't be accessing db directly from UserAPI
        super();
        this.store = store;
    }

    initialize(config) {
        //built in method called by ApolloServer
        this.context = config.context;
    }

    async getUsers() {
        //this method will get the list of users from the store
        const users = await this.store.users;
        return users;
    }
}

module.exports = UserAPI;
