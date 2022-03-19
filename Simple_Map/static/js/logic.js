// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

   let line = [
        [37.6213, -122.3790],
        [30.2666, -97.7333],
        [39.8493, -104.6738],
        [44.1643, -80.0369],
        [40.6413, -73.7781]
      ];
      // Create a polyline using the line coordinates and make the line red.
    L.polyline(line, {
        color: 'blue',
        weight: 4,
        dashArray: '20, 20'
      }).addTo(map);

// Coordinates for each point to be used in the line.
//   let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];
//   // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow"
//   }).addTo(map);
// Second method // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Add a marker to the map for Los Angeles, CA
// let marker=L.circleMarker([34.0522, -118.2437], {
//     color: "black",
//     fillColor: "yellow",
//     fillOpacity: 0.5,
//     radius: 100
// }).addTo(map);

// get the data from cities.js
// let cityData = cities;


//   // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         color: 'orange',
//         fillColor: 'orange',
//         fillOpacity: 0.5,
//         radius:city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//    });

 
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);