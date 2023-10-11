const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const filter = input.value.split(" ").join("+");

        const listElement = document.createElement('li');
        const deleteButton = document.createElement('button');
        listElement.textContent = input.value;
        listElement.innerHTML = `<a href="https://www.churchofjesuschrist.org/search?lang=eng&query=${filter}&page=1&facet=scriptures" target="_blank">${input.value}</a>`
        deleteButton.textContent = '❌';

        listElement.append(deleteButton);
        list.append(listElement);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listElement);
            input.focus();
            input.value = '';
        })
    }
});