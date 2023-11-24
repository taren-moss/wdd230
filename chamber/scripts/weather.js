const weather = document.querySelector('.weather');
const key = `83b127813f482c1af26f11071b370c34`;
const target = {
    "lat": 45.89,
    "lon": -123.96
};
const source = `https://api.openweathermap.org/data/2.5/weather?lat=${target.lat}&lon=${target.lon}&appid=${key}&units=imperial`;
const forecastSource = `https://api.openweathermap.org/data/2.5/forecast?lat=${target.lat}&lon=${target.lon}&appid=${key}&units=imperial`

async function GetWeather(location) {
    try {
        const response = await fetch(location);
        if (response.ok) {
            const data = await response.json();
            SetWeather(data);
            GetForecast(forecastSource);
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
    icon.setAttribute('class', 'weather-icon');
    weatherData.innerHTML = `${FindDay(new Date().getDay())}<br>${data.weather[0].description}<br>${data.main.temp.toFixed(0)}°F<br>Wind: ${data.wind.speed.toFixed(1)} MPH`;
    windChill.textContent = `Wind Chill: ${WindChill(data.main.temp, data.wind.speed)}`;

    weather.appendChild(location);
    weather.appendChild(icon);
    weather.appendChild(weatherData);
    weather.appendChild(windChill);
}

function WindChill(temp, wind) {
    if (temp <= 50 && wind >= 3) {
        var chill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16));
        return `${chill.toFixed(0)}°F`;
    }
    else {
        return 'N/A';
    }
}

async function GetForecast(location) {
    try {
        const response = await fetch(location);
        if (response.ok) {
            const data = await response.json();
            SetForecast(data);
        }
        else {
            throw Error(response.text);
        }
    }
    catch (error) {
        console.log(error);
    }
}

function SetForecast(input) {
    let div = document.createElement('div');
    for (let i = 0; i < input.list.length; i++) {
        if (i == 8 || i == 16 || i == 24) {
            let data = input.list[i];
            let section = document.createElement('section');
            let icon = document.createElement('img');
            let information = document.createElement('p');
            let url = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            icon.setAttribute('src', url);
            icon.setAttribute('alt', data.weather[0].description);
            icon.setAttribute('class', 'weather-icon');
            information.innerHTML = `${FindDay(new Date(data.dt * 1000).getDay())}<br>${data.weather[0].description}<br>${data.main.temp.toFixed(0)}°F`;

            section.appendChild(icon);
            section.appendChild(information);

            div.appendChild(section);
        }
    }

    div.setAttribute('id', 'forecast');
    weather.appendChild(div);
}

function FindDay(input) {
    let output = '';
    if (input == 0) {
        output = 'Sunday';
    }
    else if (input == 1) {
        output = 'Monday';
    }
    else if (input == 2) {
        output = 'Tuesday';
    }
    else if (input == 3) {
        output = 'Wednesday';
    }
    else if (input == 4) {
        output = 'Thursday';
    }
    else if (input == 5) {
        output = 'Friday';
    }
    else if (input == 6) {
        output = 'Saturday';
    }

    return output;
}

GetWeather(source);