const { UI } = require("./UI");
const ui = new UI();
const { Weather } = require("./Weather");
const weather = new Weather('-37.976618', '-57.542284'); //my example's coordinates

//load style
require("./index.css");

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.display(data);
}

//document.addEventListener('DOMContentLoaded', fetchWeather);
document.addEventListener('DOMContentLoaded', ()=>{
    function handlePermission() {//thnxs moz
        navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
            if (result.state == 'granted') {
                report(result.state);
            } else if (result.state == 'prompt') {
                report(result.state);
            } else if (result.state == 'denied') {
                report(result.state);
            }
            result.onchange = function () {
                report(result.state);
            }
        });
    }

    function report(state) {
        console.log('Geolocation Permission ' + state);
    }

    if (navigator.geolocation) {        
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            weather.updateLocation(lat, long);
            fetchWeather();
        }, handlePermission());
    }else{
        fetchWeather();
    }
});
