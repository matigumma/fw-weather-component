export class UI {
    constructor(){
        this.location = document.getElementById('weather-location');
        this.temperature = document.getElementById('weather-temperature');
        this.wind = document.getElementById('weather-wind');
    }

    display(weather) {
        this.location.textContent = weather.name +' ';
        this.temperature.textContent = weather.main.temp + '°C ';
        this.wind.textContent = weather.wind.speed + 'm/s';
    }
}