// mapa
mapboxgl.accessToken =
    'pk.eyJ1Ijoia2FyaW5heWkxIiwiYSI6ImNrcHk1bmh4cjAyaTYydnBhbzNwMDg3bG8ifQ.uAZA9cBbpdwWNSNgdPX5eA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/karinayi1/ckqkerupb24wn18mt7uwaxmaf',
    center: [-46.63998322438588, -23.55418790802442],
    zoom: 10.7
});

// ação após clicar nos pontos
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['ecopontos']
    });
    if (!features.length) {
        return;
    }
    var feature = features[0];

    // aparece o título e a descrição
    var popup = new mapboxgl.Popup({
            offset: [0, -15]
        })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
            '<h3>' + feature.properties.title + '</h3>' +
            '<p>' + feature.properties.description + '</p>'
        )
        .addTo(map);
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: false,
    mapboxgl: mapboxgl,
    bbox: [-46.82963522605044, -24.013134229494142, -46.37185613023797, -23.304536208310935]
});

map.addControl(geocoder);