
function printInput(){

    const inpVal = document.querySelector('.js-input').value;
    
    if(inpVal !== ""){

        document.querySelector('.js-para')
          .innerHTML = `Your Name is: ${inpVal}`;
    }
}

function printonEnter(event){
    if(event.key === 'Enter'){
        printInput();
    }
}

function keyup(event){
    const inpVal = document.querySelector('.js-input').value;

    if(event.key !== 'Enter'){
     document.querySelector('.js-para')
          .innerHTML = `${inpVal}`;
    }
}