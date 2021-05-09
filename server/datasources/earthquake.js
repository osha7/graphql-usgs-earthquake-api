const { RESTDataSource } = require('apollo-datasource-rest');

class EarthquakeAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://earthquake.usgs.gov/fdsnws/event/1/';
    }

    async getAllEarthquakes() {
        const query = await this.get(
            'query?format=geojson&starttime=2021-05-07&endtime=2021-05-08'
        ); //the query path to add on to the url
        return Array.isArray(query.features) // check to make sure the response is an Array
            ? query.features.map((earthquake) =>
                  this.earthquakeReducer(earthquake)
              )
            : []; // if the response is false, it returns back an empty array
    }

    earthquakeReducer(earthquake) {
        const date = new Date(earthquake.properties.time);
        const year = date.getFullYear();
        const month = monthName(date.getMonth());
        const day = date.getDate();
        const hour = date.getHours();
        const minute =
            date.getMinutes() < 10
                ? '0' + date.getMinutes()
                : date.getMinutes();
        const seconds = date.getSeconds();
        const datestring = `${month} ${day}, ${year} at ${hour}:${minute} and ${seconds} seconds`;
        const timestamp = earthquake.properties.time;

        function monthName(index) {
            const monthLegend = {
                0: 'January',
                1: 'February',
                2: 'March',
                3: 'April',
                4: 'May',
                5: 'June',
                6: 'July',
                7: 'August',
                8: 'September',
                9: 'October',
                10: 'November',
                11: 'December'
            };
            return monthLegend[index];
        }

        return {
            magnitude: earthquake.properties.mag,
            location: earthquake.properties.place,
            when: datestring,
            time: timestamp,
            id: earthquake.id
        };
    }
}

module.exports = EarthquakeAPI;
