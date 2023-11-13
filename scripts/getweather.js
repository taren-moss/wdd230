const key = `83b127813f482c1af26f11071b370c34`;
const target = {
    "lat": 46.188,
    "lon": -123.831
};
const source = `https://api.openweathermap.org/data/2.5/weather?lat=${target.lat}&lon=${target.lon}&appid=${key}`;

async function GetWeather(location) {
    const response = await fetch(location);
    const data = await response.json();
    console.log(data);
}

GetWeather(source);