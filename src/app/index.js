const { UI } = require("./UI");
const ui = new UI();

const { UriParams } = require("./GetURIparams");
const params = new UriParams;
const urilatlong = params.getAll();

const { Store } = require("./LocalStorage");
const localstorage = new Store;
const { latitude, longitude } = localstorage.getData()

if (typeof urilatlong.lat === 'undefined' || typeof urilatlong.long === 'undefined'){
    lat = latitude;
    long = longitude;
}else{
    lat = urilatlong.lat;
    long = urilatlong.long;
    ui.statusLocalstorage("URL data loaded!");
}

const { Weather } = require("./Weather");
const weather = new Weather(lat, long); 

//load style
require("./index.css");

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.display(data);
}
document.addEventListener('DOMContentLoaded', fetchWeather); //start the request
document.getElementById('setLs').addEventListener('click', (e) => {//handling localstorage set
    localstorage.setData(lat, long);
    ui.statusLocalstorage("data stored");
    e.preventDefault();
});
document.getElementById('removeLs').addEventListener('click', (e) => {//handling localstorage set
    localstorage.removeData();
    ui.statusLocalstorage("data removed");
    e.preventDefault();
});