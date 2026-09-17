
function turnOn(btnName){
    const value = document.querySelector(btnName);

    
    if(value.classList.contains('js-class')){
        value.classList.remove('js-class');
    }else{
        document.querySelector('.gaming')
            .classList.remove('js-class');

        document.querySelector('.music')
            .classList.remove('js-class');
            
        document.querySelector('.tech')
            .classList.remove('js-class');

        value.classList.add('js-class');
    }
}