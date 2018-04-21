var southWest = L.latLng(-90, -180),
northEast = L.latLng(90, 180),
bounds = L.latLngBounds(southWest, northEast);

var map = L.map('mapid', {zoomControl: false, maxBounds: bounds, center:bounds.getCenter(), maxBoundsViscosity: 0.75}).setView([-19.9208300, -43.9377800], 12);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    minZoom: 4,
    reuseTiles: true
    
}).addTo(map);

L.control.zoom({
    position: 'bottomright'
}).addTo(map);