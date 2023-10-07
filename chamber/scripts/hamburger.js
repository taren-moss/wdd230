const menu = document.querySelector('#menu')
const navigation = document.querySelector('.nav-small');

menu.addEventListener('click', () => {
menu.classList.toggle('show');
navigation.classList.toggle('show');
})