const weather = document.querySelector('#weather');
const key = `83b127813f482c1af26f11071b370c34`;
const targetLocation = {
    "lat": 20.44,
    "lon": -86.90
};
const source = `https://api.openweathermap.org/data/2.5/weather?lat=${targetLocation.lat}&lon=${targetLocation.lon}&appid=${key}&units=imperial`;
const forecastSource = `https://api.openweathermap.org/data/2.5/forecast?lat=${targetLocation.lat}&lon=${targetLocation.lon}&appid=${key}&units=imperial`

async function GetWeather(location) {
    try {
        const response = await fetch(location);
        if (response.ok) {
            const data = await response.json();
            SetWeather(data);
            CreateBanner(data.main.temp_max);
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
    let location = document.createElement('h2');
    let today = document.createElement('p');
    let icon = document.createElement('img');
    let weatherData = document.createElement('p');
    let url = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    location.innerText = data.name;
    today.innerText = "Today"
    icon.setAttribute('src', url);
    icon.setAttribute('alt', data.weather[0].description);
    icon.setAttribute('class', 'weather-icon');
    weatherData.innerHTML = `${data.weather[0].description}<br>${data.main.temp.toFixed(0)}°F<br>Humidity: ${data.main.humidity.toFixed(0)}%`;

    weather.appendChild(location);
    weather.appendChild(today);
    weather.appendChild(icon);
    weather.appendChild(weatherData);
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
    let data = input.list[8];
    let section = document.createElement('section');
    let tomorrow = document.createElement('p');
    let icon = document.createElement('img');
    let information = document.createElement('p');
    let url = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    tomorrow.textContent = 'Tomorrow';
    icon.setAttribute('src', url);
    icon.setAttribute('alt', data.weather[0].description);
    icon.setAttribute('class', 'weather-icon');
    information.innerHTML = `${data.weather[0].description}<br>${data.main.temp.toFixed(0)}°F<br>Humidity: ${data.main.humidity.toFixed(0)}%`;

    section.appendChild(tomorrow);
    section.appendChild(icon);
    section.appendChild(information);

    div.appendChild(section);

    div.setAttribute('id', 'forecast');
    weather.appendChild(div);
}

function CreateBanner(value) {
    const banner = document.querySelector('#banner');

    const message = document.createElement('p');
    const closeButton = document.createElement('button');

    message.textContent = `Today's temperature will rise as high as ${value.toFixed(0)}°F!`;
    closeButton.textContent = 'Close';
    closeButton.setAttribute('class', 'smallbutton');
    closeButton.addEventListener('click', () => {
        banner.style.setProperty('display', 'none');
    });
    banner.appendChild(message);
    banner.appendChild(closeButton);
    banner.style.setProperty('display', 'block');
}

GetWeather(source);