import '../css/style.css';
import * as turf from '@turf/helpers'; // for geojson creation
import {parse} from 'query-string'
window.turf = turf;
// decipher the intended center
const query = parse(window.location.search);
const center = query.center
  || query.lat != undefined && query.lng != undefined && [query.lng, query.lat]
  || [42.36,-71.0589];
const zoom = 13;
window.map = L.map('map', {center, zoom});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

window.marker = L.marker(center).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
