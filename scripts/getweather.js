const weather = document.querySelector('#weather');
const key = `83b127813f482c1af26f11071b370c34`;
const target = {
    "lat": 46.188,
    "lon": -123.831
};
const source = `https://api.openweathermap.org/data/2.5/weather?lat=${target.lat}&lon=${target.lon}&appid=${key}&units=imperial`;

async function GetWeather(location) {
    try {
        const response = await fetch(location);
        if (response.ok) {
            const data = await response.json();
            SetWeather(data);
            console.log(data);
        }
        else {
            throw Error(response.text);
        }
    }
    catch (error) {
        console.log(error);
    }
}

function SetWeather(data) {
    let image = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">`
    weather.innerHTML = `${image}<p>${data.main.temp.toFixed(0)}°F - ${data.weather[0].description}</p>`
}

GetWeather(source);