// Add console.log to check to see if our code is working.
console.log("working");
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Bscheinin/Mapping_Earthquakes/main/majorAirports.json";
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  // L.geoJson(data).addTo(map);
})

// let airportData = "https://raw.githubusercontent.com/Bscheinin/Mapping_Earthquakes/main/majorAirports.json";
// let airportData = "C:\Users\scheir3\Class\Mapping_Earthquakes\Simple_Map\static\majorAirport.js";

// d3.json(airportData, function(data) {
//   console.log(data);
// });
// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     // id: 'mapbox/streets-v11',
//     // tileSize: 512,
//     // zoomOffset: -1,
//     accessToken: API_KEY
// });
// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Create a base layer that holds both maps.
// let baseMaps = {
//   Street: streets,
//   Dark: dark
// };

// // Create the map object with a center, zoom level and default layer.
// let map = L.map('mapid', {
//   center: [30, 30],
//   zoom: 2,
//   layers: [streets]
// })
// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map)

// Then we add our tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/Bscheinin/Mapping_Earthquakes/main/majorAirports.json";
// // let airportData = "C:\Users\scheir3\Class\Mapping_Earthquakes\Simple_Map\static\majorAirports.json";
//   // console.log(airportData);
// //   d3.json(airportData).then(function(data) {
// //     console.log(data)
// //   // Creating a GeoJSON layer with the retrieved data.
// //   L.geoJSON(data).addTo(map)
// // });
// d3.json(airportData, function(data) {
//   console.log(data);
// });
// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data)
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map)
// });

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};
// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup();
//     }
// }).addTo(map);


//    let line = [
//         [37.6213, -122.3790],
//         [30.2666, -97.7333],
//         [39.8493, -104.6738],
//         [44.1643, -80.0369],
//         [40.6413, -73.7781]
//       ];
//       // Create a polyline using the line coordinates and make the line red.
//     L.polyline(line, {
//         color: 'blue',
//         weight: 4,
//         dashArray: '20, 20'
//       }).addTo(map);

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




