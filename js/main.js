mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcGhlbnd6eSIsImEiOiJja3Y4b2txcW8ya24zMndtczJwa256cTdwIn0.6Asu6a19dzDDHyIqZOFE6g';

let map = new mapboxgl.Map ({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    zoom:5.5,
    center: [138, 38]
});

async function geojsonFetch() {
    let response, earthquakes, japan, table;
    response = await fetch('assets/earthquakes.geojson')
    earthquakes = await response.json();
    response = await fetch ('assets/japan.json');
    japan = await response.json(); 
};

geojsonFetch();

map.on('load', function loadingData() {

    map.addSource ('earthquakes', {
        type: 'geojson',
        data: earthquakes
    });

    map.addLayer({
        'id':'earthquakes-layer',
        'type':'circle',
        'source':'earthquakes',
        'paint':{
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-color': 'red',
            'circle-stroke-color':'white'
        }
    })


    map.addSource('japan', {
        type: 'geojson',
        data: japan
    });

    map.addLayer({
        'id': 'japan-layer',
        'type':'fill',
        'source': 'japan',
        'paint':{
            'fill-color': '#0080ff',
            'fill-opacity': 0.5
        }
    });

})