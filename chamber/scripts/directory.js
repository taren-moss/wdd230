const space = document.querySelector('.directory');
const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');

async function GetCompanyData(DisplayType) {
    const response = await fetch("data/members.json");
    const data = await response.json();
    DisplayType(data.companies);
}

function DisplayGrid(data) {
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
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '600');
        logo.setAttribute('height', '400');

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
        card.setAttribute('class', 'card');

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