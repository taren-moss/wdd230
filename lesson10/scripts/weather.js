const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const appId = `83b127813f482c1af26f11071b370c34`;
const area = {
    "lat": 49.75,
    "lon": 6.64
};
const source = `https://api.openweathermap.org/data/2.5/weather?lat=${area.lat}&lon=${area.lon}&appid=${appId}&units=imperial`;

async function ApiFetch(location) {
    try {
        const response = await fetch(location);
        if (response.ok) {
            const data = await response.json();
            DisplayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function DisplayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}°F`;
    const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSource);
    weatherIcon.setAttribute('alt', `Icon of ${desc}`);
    weatherIcon.setAttribute('loading', 'lazy');
    captionDesc.textContent = `${desc}`;
}

ApiFetch(source);