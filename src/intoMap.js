var mymap = L.map('mapid').setView([51.505, 6], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

// L.marker([50.941326, 6.957994]).addTo(mymap).bindPopup('Cologne');
var domIcon = L.icon({
    iconUrl: 'dom.svg',

    iconSize: [60, 80], // size of the icon
    iconAnchor: [30, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -35] // point from which the popup should open relative to the iconAnchor
});

L.marker([50.941326, 6.957994], { icon: domIcon }).addTo(mymap).bindPopup('<img width="200px" src="/images/dom.jpg">');

var europeancountriesGeoJSON = false;
fetch('/europeancountries.json', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
        var geojson = L.geoJSON(json, {
            style: function(feature) {
                return {
                    fillOpacity: 0,
                    weight: 0.3,
                }
            },
            onEachFeature: function(feature, layer) {
                layer.on('mouseover', function() {
                    layer.setStyle({ fillOpacity: 0.3 })
                })
                layer.on('mouseout', function() {
                    layer.setStyle({ fillOpacity: 0 })
                })
                layer.on('click', function(e) {
                    mymap.fitBounds(e.target.getBounds())
                })
            }
        }).addTo(mymap);
    })
    .catch(error => console.log(error.message));

// States map

var map = L.map('map').setView([37.8, -96], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light', // id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiZHRjMiIsImEiOiJjajM0bGhtdWMwMXMyMndvOTNhMTV5bGlwIn0.P982OmG7OY8ETeL971l1Ww'
}).addTo(map);


L.geoJSON(statesData).addTo(map);

function getColor(d) {
    return d > 1000 ? 'green' :
        d > 500 ? 'orange' :
        d > 200 ? 'red' :
        d > 100 ? 'blue' :
        d > 50 ? 'lightgreen' :
        d > 20 ? 'lightblue' :
        d > 10 ? 'yellow' :
        'purple';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
L.geoJson(statesData, { style: style }).addTo(map);

function highlightFeature(e) {
    var layer = e.target;
    info.update(layer.feature.properties);

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}


function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);


var info = L.control();

info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function(props) {
    this._div.innerHTML = '<h4>US States</h4>' + (props ?
        '<b>' + props.name + '</b><br />' :
        'Hover over a state');
}

info.addTo(map);



var legend = L.control({ position: 'bottomright' });

legend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};