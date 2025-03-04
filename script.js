mapboxgl.accessToken = "pk.eyJ1IjoiY2Fyb2xpbmVuZWUiLCJhIjoiY201b2RhZmxtMGthajJucHRxcW5heGxiNyJ9.NMKAQoQvhYJ8RQq0NQuYkA";
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/carolinenee/cm7uuha4i01rf01qo19chh4m6', // style URL
    center: [-79.39, 43.66], // starting position [lng, lat]
    zoom: 13, // starting zoom
});

map.on('load', () => {
    // Add a data source containing GeoJSON data
    map.addSource('toronto_neighbourhoods', {
        "type": 'vector',
        "url": 'mapbox://carolinenee.3bs4acz8'
    });

    map.addLayer({
        'id': 'neighborhood_visualised',
        'type': 'fill',
        'source': 'toronto_neighbourhoods',
        'source-layer': 'Neighbourhoods_-_4326-aanwor', // Replace with the actual source layer name
        'paint': {
            'fill-color': '#4ed488',
            'fill-opacity': 0.1,
            'fill-outline-color': 'black'
        }
    });
});