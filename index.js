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


function startTime() {
  const diff = new Date(new Date(2025, 11, 14, 17) - new Date());
  if (diff < 0) return false;
  let d = diff.getDate();
  let h = diff.getHours();
  let m = diff.getMinutes();
  let s = diff.getSeconds();
  h = (h < 10 ? "0" + h : h);
  m = (m < 10 ? "0" + m : m);
  s = (s < 10 ? "0" + s : s);
  document.getElementById("counter-time").innerHTML =  d + "d " + h + "h " + m + "m " + s + "s";
  setTimeout(startTime, 1000);
  return true;
}
