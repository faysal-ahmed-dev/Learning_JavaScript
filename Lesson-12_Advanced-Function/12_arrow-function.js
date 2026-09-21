

function normalFunction(x, y) {
    console.log('Normal function');
    
    return x+y;
    
}

console.log(normalFunction(5, 5));


const variableFunction = function(x, y){
    console.log('Variable Function');
    
    return x+y;
}

console.log(variableFunction(3, 17));

// Arrow functions

const arrowFunction = (x, y) => {
    console.log('Arrow Function');
    
    return x+y;
}

console.log(arrowFunction(4,12));

const arrowOneline = x => x*10;

console.log(arrowOneline(12));
