
function enterButton(event){
    if(event.key === 'Enter'){
        calcShippingCost();
    }
}

function calcShippingCost(){
    
    const inputElem = document.querySelector('.js-input').value;
    
    let cost = Number(inputElem);

    if(cost < 40){
        cost += 10;

        document.querySelector('.js-total-cost')
          .innerHTML = `Total order cost : $${cost}`;
    }else{
        document.querySelector('.js-total-cost')
          .innerHTML = `Total order cost : $${cost} [Free Shipping]`;
    }

}
