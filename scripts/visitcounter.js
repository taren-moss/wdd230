const visitDisplay = document.querySelector('#visitCounter');

let visitCount = Number(window.localStorage.getItem("visitCount")) || 0;

visitCount += 1;
if (visitCount == 1) {
    visitDisplay.textContent = "Number of Visits: This is your first visit!";
}
else {
    visitDisplay.textContent = `Number of Visits: ${visitCount}`;
}

window.localStorage.setItem("visitCount", visitCount);