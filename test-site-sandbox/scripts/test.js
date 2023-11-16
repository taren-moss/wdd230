const output = document.querySelector('#forecast');
const key = `83b127813f482c1af26f11071b370c34`;
let now = new Date();
console.log(now);
console.log(Date.now())
const target = {
    "lat": 45.89,
    "lon": -123.96
};
const source = `https://api.openweathermap.org/data/2.5/forecast?lat=${target.lat}&lon=${target.lon}&appid=${key}&units=imperial`;

async function GetForecast(location) {
    try {
        const response = await fetch(location);
        if (response.ok) {
            const data = await response.json();
            SetForecast(data);
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

function SetForecast(input) {
    for (let i = 0; i < input.list.length; i++) {
        if (i == 8 || i == 16 || i == 24) {
            let data = input.list[i];
            let section = document.createElement('section');
            let icon = document.createElement('img');
            let information = document.createElement('p');
            let url = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            icon.setAttribute('src', url);
            icon.setAttribute('alt', data.weather[0].description);
            information.innerHTML = `${GetDay(new Date(data.dt * 1000).getDay())}<br>${data.weather[0].description}<br>${data.main.temp.toFixed(0)}°F`;

            section.appendChild(icon);
            section.appendChild(information);

            output.appendChild(section);
        }
    }
}

function GetDay(input) {
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

GetForecast(source);