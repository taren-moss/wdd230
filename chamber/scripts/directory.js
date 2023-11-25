const space = document.querySelector('#directory');
const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');
const themeSwitch = document.querySelector('.switch');
const themeValue = document.querySelector('#theme-switch');

async function GetCompanyData(DisplayType) {
    const response = await fetch("data/members.json");
    const data = await response.json();
    DisplayType(data.companies);
}

function DisplayGrid(data) {
    let counter = data.length;
    data.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');

        name.textContent = company.name;

        logo.setAttribute('src', company.img);
        logo.setAttribute('alt', `${company.name} Logo`);
        logo.setAttribute('width', '600');
        logo.setAttribute('height', '400');
        if(counter <= 4) {
            logo.setAttribute('loading', 'lazy');
        }
        counter -= 1;

        address.textContent = company.address;
        phone.textContent = company.phone;

        link.textContent = `${company.name} Site`;
        link.setAttribute('href', company.url);
        link.setAttribute('target', '_blank');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(link);
        card.setAttribute('class', 'card hover');

        space.appendChild(card);
    });
}

function DisplayList(data) {
    let list = document.createElement('ul');
    data.forEach((company) => {
        let listElement = document.createElement('li');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');
    
        name.textContent = company.name;

        address.textContent = company.address;
        phone.textContent = company.phone;
    
        link.textContent = `${company.name} Site`;
        link.setAttribute('href', company.url);
        link.setAttribute('target', '_blank');
    
        listElement.appendChild(name);
        listElement.appendChild(address);
        listElement.appendChild(phone);
        listElement.appendChild(link);
    
        list.appendChild(listElement);
    });
    space.appendChild(list);
}

function ThemeToggle() {
    const card = document.querySelectorAll('.card');
    const label = document.querySelectorAll('.card > h3');
    var root = document.querySelector(`:root`);

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
}

themeSwitch.addEventListener('click', () => ThemeToggle())

gridButton.setAttribute('class', 'active');
listButton.setAttribute('class', '');
space.innerHTML = "";
GetCompanyData(DisplayGrid)

gridButton.addEventListener('click', () => {
    gridButton.setAttribute('class', 'active');
    listButton.setAttribute('class', '');
    space.innerHTML = "";
    GetCompanyData(DisplayGrid)
});

listButton.addEventListener('click', () => {
    listButton.setAttribute('class', 'active');
    gridButton.setAttribute('class', '');
    space.innerHTML = "";
    GetCompanyData(DisplayList);
});