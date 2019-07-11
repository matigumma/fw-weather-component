const { UI } = require("./UI");
const ui = new UI();
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
    removeData() {
        localStorage.clear();
    }

    getData() {//if data is in localstorage get it, if not use default
        if (localStorage.getItem('lat') === null || localStorage.getItem('long') === null){
            this.lat = this.defaultLat;
            this.long = this.defaultLong; 
            ui.statusLocalstorage("Default data loaded");
        }else{
            this.lat = localStorage.getItem('lat');
            this.long = localStorage.getItem('long'); //asume this long is allways present 
            ui.statusLocalstorage("Localstorage data loaded!");
        }

        return {
            latitude: this.lat,
            longitude: this.long
        }
    }
}