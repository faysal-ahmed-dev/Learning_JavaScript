
const selectButton = document.querySelector('.js-button');

function onClick(selectButton) {
    
    if(selectButton.innerHTML === 'Start'){
        selectButton.innerHTML = 'Loading...';
    }
    
    setTimeout(function(){
        if(selectButton.innerHTML === 'Loading...'){
            selectButton.innerHTML = 'Finished';
        }
        
    
    }, 2000 );

     
    setTimeout(function(){
        if(selectButton.innerHTML === 'Finished'){
            selectButton.innerHTML = 'Start';
        }
        
    
    }, 3000 );

}