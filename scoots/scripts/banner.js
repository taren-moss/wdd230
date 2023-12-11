const banner = document.querySelector('#meet-banner');

if (CorrectDay(new Date().getDay())) {
    const message = document.createElement('p');
    const closeButton = document.createElement('button');

    message.textContent = "Join us for a Meet and Greet this Wednesday at 7:00 PM!";
    closeButton.textContent = 'X';
    closeButton.setAttribute('id', 'meet-button');
    closeButton.addEventListener('click', () => {
        banner.style.setProperty('display', 'none');
    });
    banner.appendChild(message);
    banner.appendChild(closeButton);
    banner.style.setProperty('display', 'block');
}
else {
    banner.style.setProperty('display', 'none');
}

function CorrectDay(input) {
    let output = null;
    if (input == 1 || input == 2 || input == 3) {
        output = true;
    }
    else {
        output = false;
    }

    return output;
}