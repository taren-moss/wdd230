const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let lastMod = new Date(document.lastModified).toLocaleDateString('en-us', {month:"short", day:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"})
document.querySelector('footer h3').innerHTML = `©${currentYear} - Taren D. Moss`;
document.querySelector('#lastModified').textContent = `Last modified: ${lastMod}`;
