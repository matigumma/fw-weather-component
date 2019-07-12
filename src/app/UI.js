export class UI {
    constructor(){
        this.location = document.getElementById('weather-location');
        this.temperature = document.getElementById('weather-temperature');
        this.wind = document.getElementById('weather-wind');
        this.statusLs = document.getElementById('statusLs');
        this.icon = document.getElementById('icon');
        this.desc = document.getElementById('desc');
        this.iconmark = document.getElementById('icon-mark');
    }

    display(weather) {
        this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        this.icon.alt = weather.weather[0].main;
        this.desc.textContent = weather.weather[0].main;
        this.location.textContent = weather.name +' ';
        this.temperature.textContent = 'Temp: ' + weather.main.temp + '°C ';
        this.wind.textContent = 'wind: ' + weather.wind.speed + 'm/s';
        this.iconmark.style = `transform: rotate(${weather.wind.deg}deg); -ms - transform: rotate(${weather.wind.deg}deg); -webkit - transform: rotate(${weather.wind.deg}deg);`;
    }

    statusLocalstorage(status) {
        this.statusLs.textContent = status;
    }
}