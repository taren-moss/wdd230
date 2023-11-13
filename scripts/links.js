const list = document.querySelector("ul");

const baseURL = "https://taren-moss.github.io/wdd230/";
const linksURL = "data/links.json";

async function GetLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    DisplayLinks(data.lessons);
}

function DisplayLinks(weeks) {
    weeks.forEach((week) => {
        let item = document.createElement('li');
        item.textContent = `Week ${week.lesson}: `;

        week.links.forEach((link) => {
            let newLink = document.createElement('a');
            newLink.setAttribute('href', link.url);
            newLink.setAttribute('target', "_blank");
            newLink.textContent = link.title;
            item.appendChild(newLink);
            item.append(' | ');
        })

        list.appendChild(item);
    })
}
  
  GetLinks();