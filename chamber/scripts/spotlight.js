const members = 'data/members.json';
const spotlight = document.querySelector('#spotlight');

async function GetData(input) {
    try {
        const response = await fetch(input);
        if (response.ok) {
            const data = await response.json();
            SetSpotlight(GetMembership(data));
        }
        else {
            throw Error(response.text);
        }
    }
    catch (error) {
        console.log(error);
    }
}

function GetMembership(data) {
    let companyList = [];
    data.companies.forEach((company) => {
        if(company.membership == 'gold' || company.membership == 'silver') {
            companyList.push(company);
        }
    });
    return companyList;
}

function SetSpotlight(list) {
    let data = list;
    
    for(let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * data.length);

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');

        name.textContent = data[index].name;

        logo.setAttribute('src', data[index].img);
        logo.setAttribute('alt', `${data[index].name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '600');
        logo.setAttribute('height', '400');

        address.textContent = data[index].address;
        phone.textContent = data[index].phone;

        link.textContent = `${data[index].name} Site`;
        link.setAttribute('href', data[index].url);
        link.setAttribute('target', '_blank');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(link);
        card.setAttribute('class', 'card');

        spotlight.appendChild(card);

        data.splice(index, 1);
    }
}

GetData(members);