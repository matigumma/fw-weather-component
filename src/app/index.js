const { UI } = require("./UI");
const ui = new UI();
const { Weather } = require("./Weather");
const weather = new Weather('-37.976618', '-57.542284'); //cardiel example's coordinates

//load style
require("./index.css");

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.display(data);
}
document.addEventListener('DOMContentLoaded', fetchWeather);