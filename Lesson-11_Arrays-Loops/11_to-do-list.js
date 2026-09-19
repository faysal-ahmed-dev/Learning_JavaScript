
let arrTodo = [];

console.log(arrTodo);

function todo() {

    const doName = document.querySelector('.js-input').value;

    const dueDate = document.querySelector('.date-input').value;

    arrTodo.push(
        {
            doName,
            dueDate,
    });

    renderHtml();

    document.querySelector('.js-input')
        .value = '';
}


function renderHtml() {
    
    let todoListHtml = '';

    for(let i=0; i < arrTodo.length; i++){

        todoListHtml += 
            `
            <div> ${arrTodo[i].doName} </div>
            <div> ${arrTodo[i].dueDate} </div>
            <button class="js-delete-button" onclick="
                    arrTodo.splice(${i}, 1);
                    console.log(arrTodo);
                    renderHtml();
                ">Delete</button>
            `;
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;
}

function keyUpEnter(event) {
    if(event.key === 'Enter'){
        todo();
    }
}