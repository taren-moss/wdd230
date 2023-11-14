const url = 'data/superheroes.json'

async function GetData() {
    const response = await fetch(`https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`);
    const data = await response.json();
    console.log(data);
}

GetData();