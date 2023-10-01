const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let lastMod = new Date(document.lastModified).toLocaleDateString('en-us', {month:"short", day:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"})
document.querySelector('footer p').innerHTML = `©${currentYear}<br>Taren Moss<br>Oregon`;
document.querySelector('#lastModified').textContent = `Last modified: ${lastMod}`;
