const fetch = require('node-fetch');

fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-05-07&endtime=2021-05-08')
.then(res => res.json())
.then(earthquakeData => {
    // console.log(earthquakeData.features[0]);

    const earthquake = earthquakeData.features[0];
    const date = new Date(earthquake.properties.time);
    console.log("Date: ", date)
    const year = date.getFullYear();
    console.log("Year: ", year);
    // const month = date.getMonth();
    const month = monthName(date.getMonth());
    console.log("Month: ", month);

    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds();
    const datestring = `${month} ${day}, ${year} at ${hour}:${minute} and ${seconds} seconds`;
    const timestamp = earthquake.properties.time

    function monthName(index) {
        const monthLegend = {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October", 
            10: "November",
            11: "December"
        }
        return monthLegend[index];
    };
    const customData = {
        magnitude: earthquake.properties.mag,
        location: earthquake.properties.place,
        when: datestring,
        time: timestamp,
        id: earthquake.id
    }
    console.log(customData);
});