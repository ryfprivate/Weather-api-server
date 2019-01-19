class CurrentWeather {
    constructor(rawData) {
        const {main, weather, wind} = rawData;
        this.minCelsius = main.temp_min;
        this.maxCelsius = main.temp_max;
        this.minFahrenheit = this.calculateFahrenheit(main.temp_min);
        this.maxFahrenheit = this.calculateFahrenheit(main.temp_max);;
        this.humidity = main.humidity;
        this.weather = weather.main;
        this.weatherDesc = weather.description;
        this.windSpeed = wind.speed;
        this.windDirection = this.calculateWindDirection(wind.deg);
    }

    calculateWindDirection(degree) {
        const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const value = Math.floor(degree+22.5)/45;
        return dirs[value % 8];
    }
    calculateFahrenheit(celsius) {
        const interval = 9/5;
        const fah = (celsius*interval) + 32;
        return Number.parseFloat(fah.toFixed(2));
    }
}

module.exports = CurrentWeather;