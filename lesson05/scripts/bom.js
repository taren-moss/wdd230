const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
var count = 0;

button.addEventListener('click', () => {
    if (input.value != '') {
        if (count < 10) {
            const filter = input.value.split(' ').join('+');

            const listElement = document.createElement('li');
            const deleteButton = document.createElement('button');
            listElement.textContent = input.value;
            listElement.innerHTML = `<a href="https://www.churchofjesuschrist.org/search?lang=eng&query=${filter}&page=1&facet=scriptures" target="_blank">${input.value}</a>`
            deleteButton.textContent = '❌';

            listElement.append(deleteButton);
            list.append(listElement);
            count += 1;

            deleteButton.addEventListener('click', () => {
                list.removeChild(listElement);
                input.focus();
                input.value = '';
                count -= 1;
            })
        }
        else {
            window.alert('Cannot add more than 10 elements! Remove one to add more!')
        }
    }
    input.value = '';
});