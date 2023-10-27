const visitDisplay = document.querySelector('#greeting');
const mstoDays = 84600000;

let lastVisited = new Date(window.localStorage.getItem("lastVisit")) || new Date();
let visitCount = Number(window.localStorage.getItem("chamberVisitCount")) || 0;
let today = new Date();
let message = "";

let timePassed = (today - lastVisited) / mstoDays

visitCount += 1;
if (visitCount == 1) {
    message = "Welcome! Let us know if you have any questions."
}
else {
    if ((timePassed) < 1) {
        message = "Back so soon! Awesome!";
    }
    else {
        message = `You last visited ${timePassed.toFixed(0)} days ago.`;
    }
}

visitDisplay.innerHTML = `Number of Visits: ${visitCount}<br>${message}`;

window.localStorage.setItem("lastVisit", new Date());
window.localStorage.setItem("chamberVisitCount", visitCount);