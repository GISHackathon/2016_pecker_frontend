var pckr =  pckr || {};

pckr.Corrections =  function(data) {

    if (data.hasOwnProperty('corrections')) {
        pckr.Corrections._corrections = data['corrections'];
    }


    var geojson = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [125.6, 10.1]
        },
        "properties": {
            "name": "Dinagat Islands"
        }
    };
    pckr.Corrections._corrections = geojson;


    pckr.Corrections.createLayer();

};

pckr.Corrections._corrections = [];

pckr.Corrections.createLayer = function() {

    L.geoJson(pckr.Corrections._corrections, {
        onEachFeature: pckr.Corrections.onEachFeature
    }).addTo(pckr.Map._map);

};

pckr.Corrections.onEachFeature = function(feature, layer) {
    layer.bindPopup('Hello');
};