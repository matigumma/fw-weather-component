export class UI {
    constructor(){
        this.location = document.getElementById('weather-location');
        this.temperature = document.getElementById('weather-temperature');
        this.wind = document.getElementById('weather-wind');
        this.statusLs = document.getElementById('statusLs');
        this.icon = document.getElementById('icon');
        this.desc = document.getElementById('desc');
    }

    display(weather) {
        this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        this.icon.alt = weather.weather[0].main;
        this.desc.textContent = weather.weather[0].main;
        this.location.textContent = weather.name +' ';
        this.temperature.textContent = weather.main.temp + '°C ';
        this.wind.textContent = weather.wind.speed + 'm/s';
    }

    statusLocalstorage(status) {
        this.statusLs.textContent = status;
    }
}