export class Weather {
    constructor(lat, long) {
        this.appid = "a9c128fb279ee7011396c35f1619e5aa"; //api key from openweathermap.org
        this.lat = lat;
        this.long = long;
    }

    async getWeather() {
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.appid}&units=metric`;
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    }

    async updateLocation(newLat, newLong) {
        this.lat = newLat;
        this.long = newLong;
    }

}