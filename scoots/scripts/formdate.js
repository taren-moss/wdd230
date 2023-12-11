let formDate = document.querySelector('.date');
let currentTime = new Date(Date.now()).toLocaleDateString('en-us', {month:"short", day:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"})
document.querySelector('.date').value = currentTime;