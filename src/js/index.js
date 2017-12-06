import '../css/style.css';
// initialize the map on the "map" div with a given center and zoom
window.map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});
import * as turf from '@turf/helpers'; // for geojson creation
window.turf = turf;

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

window.marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
