const { UI } = require("./UI");
const ui = new UI();

const { UriParams } = require("./GetURIparams");
const params = new UriParams;
const urilatlong = params.getAll();

const { Store } = require("./LocalStorage");
const localstorage = new Store;
const { latitude, longitude } = localstorage.getData()

typeof urilatlong.lat === 'undefined' ? lat = latitude : lat = urilatlong.lat;
typeof urilatlong.long === 'undefined' ? long = longitude : long = urilatlong.long;

const { Weather } = require("./Weather");
const weather = new Weather(lat, long); 

//load style
require("./index.css");

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.display(data);
}
document.addEventListener('DOMContentLoaded', fetchWeather);