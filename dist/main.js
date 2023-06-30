'use strict'

let body = document.querySelector('body');
let mapButtonSwitch = document.querySelectorAll('.map__button-switch');



function toggle(parent, className) {
    parent.classList.contains(className) ? parent.classList.remove(className) : parent.classList.add(className);
}

mapButtonSwitch.forEach( button => {
    button.addEventListener('click', (event) => {
        let currentButton = event.target.closest('button');
        let buttonAttr = currentButton.getAttribute('data-class')

        body.className="";
        toggle(body, buttonAttr);
    });
});