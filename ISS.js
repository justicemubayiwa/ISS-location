const mymap = L.map('issMap').setView([0, 0], 1);

const issIcon = L.icon({
  iconUrl: 'Space.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);



const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';        
const tiles = L.tileLayer(tileUrl, { attribution });(tileUrl,{attribution})   
tiles.addTo(mymap);     

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

let firstTime = true;
async function getISS(){
  const response = await fetch(api_url)
  const data = await response.json();
  const {latitude, longitude} = data;

  marker.setLatLng([latitude, longitude])
  if (firstTime){
  mymap.setView([latitude, longitude], 3)
  firstTime = false
  }
  document.getElementById('lat').textContent = data.latitude.toFixed(2);
  document.getElementById('lon').textContent = data.longitude.toFixed(2);
}

getISS();

setInterval(getISS, 1000);

