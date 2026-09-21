
const buttonElem = document.querySelector('.js-button');

function func() {
    console.log('Event Listener');
    
}
buttonElem.addEventListener('click', func);

buttonElem.addEventListener('click', () => {
    console.log('Event 2');
    
})

buttonElem.removeEventListener('click', func);