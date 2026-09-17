
function enterButton(event){
    if(event.key === 'Enter'){
        calcShippingCost();
    }
}

function calcShippingCost(){
    
    const inputElem = document.querySelector('.js-input').value;
    
    let cost = Number(inputElem);

    if( inputElem !== "" && cost > 0 && cost < 40 ){

        cost += 10;

        document.querySelector('.js-total-cost').classList.remove('js-error-para');
        document.querySelector('.js-total-cost')
          .innerHTML = `Total order cost : $${cost}`;
    }
    else if(cost >= 40){
        document.querySelector('.js-total-cost')
        .innerHTML = `Total order cost : $${cost}`;

        document.querySelector('.js-total-cost')
          .innerHTML = `Total order cost : $${cost} [Free Shipping]`;
    }
    else if(cost <= 0){
        document.querySelector('.js-total-cost').classList.add('js-error-para');
        
        document.querySelector('.js-total-cost')
        .innerHTML = 'Error: Cost must be greater than $0';
    }

}
