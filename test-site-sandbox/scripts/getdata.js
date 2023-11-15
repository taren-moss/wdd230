const url = 'data/superheroes.json'

async function GetData(input) {
    const response = await fetch(input);
    const data = await response.json();
    console.log(data.members[2].powers[1]);
}

GetData(url);