const weather = document.querySelector('.weather');
const key = `83b127813f482c1af26f11071b370c34`;
const target = {
    "lat": 45.89,
    "lon": -123.96
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
    let location = document.createElement('p');
    let icon = document.createElement('img');
    let weatherData = document.createElement('p');
    let windChill = document.createElement('p');
    let url = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    location.innerText = data.name;
    icon.setAttribute('src', url);
    icon.setAttribute('alt', data.weather[0].description);
    weatherData.innerHTML = `${data.weather[0].description}<br>Temperature: ${data.main.temp.toFixed(0)}°F<br>Wind: ${data.wind.speed}`;
    windChill.textContent = `Wind Chill: ${WindChill(data.main.temp, data.wind.speed)}`;

    weather.appendChild(location);
    weather.appendChild(icon);
    weather.appendChild(weatherData);
    weather.appendChild(windChill);
}

function WindChill(temp, wind) {
    if (temp <= 50 && wind >= 3) {
        var chill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16));
        //tempTarget.textContent = `Temperature: ${temp.toFixed(1)}°F`;
        //windTarget.textContent = `Wind Speed: ${wind.toFixed(1)} MPH`
        //outputTarget.textContent = `Wind Chill: ${chill.toFixed(1)}°F`;
        return `${chill} MPH`;
    }
    else {
        return 'N/A';
        //outputTarget.textContent = "Wind Chill: N/A"
    }
}

GetWeather(source);