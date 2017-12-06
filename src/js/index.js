import '../css/style.css';
import * as turf from '@turf/helpers'; // for geojson creation
import {parse} from 'query-string'
window.turf = turf;
import leafletRefs from '../json/leaflet-refs.json';
function openDocumentation(ref){
  debugger;
  window.open('http://leafletjs.com/reference-1.2.0.html#' + ref, '_blank');
}
let datalist = document.getElementById('leaflet-refs');
const options = leafletRefs.map(r => `<option value="${r}">${r}</option>`).join();
datalist.innerHTML = options;
document.querySelector('input').addEventListener('select', e =>{
    openDocumentation(e.target.value)
});
// decipher the intended center
const query = parse(window.location.search);
const center = query.center
  || query.lat != undefined && query.lng != undefined && [query.lng, query.lat]
  || [42.36, -71.0589];
const zoom = 13;
window.map = L.map('map', {center, zoom});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

window.marker = L.marker(center).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
