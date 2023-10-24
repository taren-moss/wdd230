const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = GetChapterList() || [];
chaptersArray.forEach(chapter => {DisplayList(chapter)})

function DisplayList(item) {
    const filter = item.split(' ').join('+');

    const listElement = document.createElement('li');
    const deleteButton = document.createElement('button');
    listElement.textContent = item;
    listElement.innerHTML = `<a href="https://www.churchofjesuschrist.org/search?lang=eng&query=${filter}&page=1&facet=scriptures" target="_blank">${input.value}</a>`
    deleteButton.textContent = '❌';

    listElement.append(deleteButton);
    list.append(listElement);

    deleteButton.addEventListener('click', () => {
        list.removeChild(listElement);
        DeleteChapter(listElement.textContent);
        input.focus();
    })
}

function GetChapterList() {
    return JSON.parse(localStorage.getItem('ChapterList'));
}

function SetChapterList() {
    localStorage.setItem('ChapterList', JSON.stringify(chaptersArray));
}

function DeleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1)
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    SetChapterList();
}

function AddChapter(inputValue) {
    if (inputValue != '') {
        DisplayList(inputValue);
        chaptersArray.push(inputValue);
        SetChapterList();
        input.value = '';
        input.focus();
    }
}

button.addEventListener('click', () => {
    if (chaptersArray.length < 10)
    {  
        AddChapter(input.value);
    }
    else {
        window.alert('Cannot add more than 10 elements! Remove one to add more!')
    }
    input.value = '';
});