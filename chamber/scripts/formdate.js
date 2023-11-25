const dateField = document.querySelector('#date');
const now = new Date();

let date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

dateField.value = date;