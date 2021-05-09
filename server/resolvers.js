module.exports = {
    Query: {
        earthquakes: (_, __, { dataSources }) =>
            dataSources.earthquakeAPI.getAllEarthquakes(),
        earthquake: (_, { id }, { dataSources }) =>
            dataSources.earthquakeAPI.getEarthquakeById({ earthquakeId: id })
        // if we needed to query for current user:
        // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
};
