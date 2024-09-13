document.addEventListener('DOMContentLoaded', function() {
    const latLon = [41.398, 2.192];
    const map = window.L.map('map').setView(latLon, 17);
    
    window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    window.L.marker(latLon).addTo(map)
    .bindPopup('ApocApoc - Nest City Lab')
    .openPopup();
});