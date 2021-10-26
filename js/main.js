mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcGhlbnd6eSIsImEiOiJja3Y4b2txcW8ya24zMndtczJwa256cTdwIn0.6Asu6a19dzDDHyIqZOFE6g';

let map = new mapboxgl.Map ({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    zoom:5.5,
    center: [138, 38]
});