const menuButton = document.querySelector('#menu-btn');

menuButton.addEventListener('click', changeBg);
menuButton.addEventListener('click', changeFontColor);

function changeBg() {
    const body = document.querySelector('body');
    if (menuButton.checked) {
        body.style.background = 'rgba(0, 0, 0, 0.3)';
    } else {
        body.style.background = '#fff';
    }
}

function changeFontColor() {
    const submit = document.querySelector('#get-joke');
    if (menuButton.checked) {
        submit.style.color = '#ababab';
    } else {
        submit.style.color = '#fff';
    }
}