const outputTarget = document.querySelector("#windchill");
const tempTarget = document.querySelector("#temp");
const windTarget = document.querySelector("#wind");
var temp = 43;
var wind = 8.2;

function WindChill () {
    if (temp <= 50 && wind >= 3) {
        var chill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16));
        tempTarget.textContent = `Temperature: ${temp.toFixed(1)}°F`;
        windTarget.textContent = `Wind Speed: ${wind.toFixed(1)} MPH`
        outputTarget.textContent = `Wind Chill: ${chill.toFixed(1)}°F`;
    }
    else {
        console.log("N/A");
        outputTarget.textContent = "Wind Chill: N/A"
    }
}

WindChill();