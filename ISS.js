const mymap = L.map('issMap').setView([51.505, -0.09], 13);
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS(){
  const response = await fetch(api_url)
  const data = await response.json();
  const {latitude, longitude} = data;
  document.getElementById('lat').textContent = data.latitude
  document.getElementById('lon').textContent = data.longitude
}

getISS();

