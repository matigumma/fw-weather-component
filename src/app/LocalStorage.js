export class Store {
    constructor(lat, long){
        this.lat = lat;
        this.long = long;
        this.defaultLat = '-37.976618'; //default sample lat
        this.defaultLong = '-57.542284'; //default sample long
    }

    setData(lat, long) {
        localStorage.setItem('lat', lat);
        localStorage.setItem('long', long);
    }

    getData() {//if data is in localstorage get it, if not use default
        localStorage.getItem('lat') === null ? this.lat = this.defaultLat : this.lat = localStorage.getItem('lat');
        localStorage.getItem('long') === null ? this.long = this.defaultLong : this.long = localStorage.getItem('long');

        return {
            latitude: this.lat,
            longitude: this.long
        }
    }
}