module.exports = {
    Query: {
        earthquakes: (_, __, { dataSources }) =>
            dataSources.earthquakeAPI.getAllEarthquakes(),
        earthquake: (_, { id }, { dataSources }) =>
            dataSources.earthquakeAPI.getEarthquakeById({ earthquakeId: id }),
        users: (_, __, { dataSources }) => dataSources.userAPI.getUsers()
        // if we needed to query for current user:
        // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
};
