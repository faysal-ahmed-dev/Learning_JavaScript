
let arrTodo = [];

function todo() {
    const inputValue = document.querySelector('.js-input').value;

    arrTodo.push(inputValue);

    console.log(arrTodo);

    document.querySelector('.js-worklist')
    .innerHTML = arrTodo;

    document.querySelector('.js-input')
        .value = '';
}

function keyUpEnter(event) {
    if(event.key === 'Enter'){
        todo();
    }
}