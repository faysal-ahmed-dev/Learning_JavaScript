
console.log('javascript');

const fnc = function() {
    console.log('Set Timeout');
    
}

setTimeout(fnc, 2000);

setTimeout(function(){
    console.log('Timeout 2');
    
}, 3500)

console.log('Hello');


// setInterval(function(){
//     console.log('set Interval');
// }, 2500)
