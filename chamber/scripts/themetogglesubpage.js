const themeSwitch = document.querySelector('.switch');
const themeValue = document.querySelector('#theme-switch');
const card = document.querySelectorAll('.card');
const label = document.querySelectorAll('.card > h3');
const call = document.querySelector('#call');
const h1 = document.querySelector('h1');
var root = document.querySelector(`:root`);

themeSwitch.addEventListener('click', () => {
    if (themeValue.checked) {
        root.style.setProperty('--main-color', '#ffc86a');
        root.style.setProperty('--secondary-color', '#f4a321');
        root.style.setProperty('--accent-color', '#683571');
        root.style.setProperty('--text-color', '#38175a');
        root.style.setProperty('--hover-color', '#683571');
        root.style.setProperty('--background-color', '#ffe78e');
        root.style.setProperty('--slider-color', '#683571');
        root.style.setProperty('--slider-background', '#38175a');
        root.style.setProperty('--shadow-color', 'rgb(244, 163, 33, 0.75)');

        card.forEach((i) => (i.style.setProperty('background-color', 'var(--main-color)')));
        card.forEach((i) => (i.style.setProperty('border-color', 'var(--secondary-color)')));
        card.forEach((i) => (i.style.setProperty('border-bottom-color', 'var(--accent-color)')));
        label.forEach((i) => (i.style.setProperty('background-color', 'var(--secondary-color)')));
    }
    else {
        root.style.setProperty('--main-color', '#683571');
        root.style.setProperty('--secondary-color', '#512466');
        root.style.setProperty('--accent-color', '#f4a321');
        root.style.setProperty('--text-color', '#ffe78e');
        root.style.setProperty('--hover-color', '#ffc86a');
        root.style.setProperty('--background-color', '#38175a');
        root.style.setProperty('--slider-color', '#ffe78e');
        root.style.setProperty('--slider-background', '#f4a321');
        root.style.setProperty('--shadow-color', 'rgb(56, 23, 90, 0.75)');
        
        card.forEach((i) => (i.style.setProperty('background-color', 'var(--secondary-color)')));
        card.forEach((i) => (i.style.setProperty('border-color', 'var(--main-color)')));
        card.forEach((i) => (i.style.setProperty('border-bottom-color', 'var(--accent-color)')));
        label.forEach((i) => (i.style.setProperty('background-color', 'var(--main-color)')));
    }
})