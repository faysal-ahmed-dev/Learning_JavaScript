// exercise 11g: create a loop that takes an array and creates a new array where each number is multiplied by 10.

const arr = [2,3,4,5,6,7,8,];
const arrNew =[];

for(let i = 0; i < arr.length; i++){
    arrNew[i] = arr[i] * 10;
}

console.log('Array = ', arr);
console.log('New Array = ', arrNew);

// exercise 11h: create a function that takes and array and returns an array where each number is increased by 10;

const arrayB = [4,5,6,7,8,9,12,3,45,65];

console.log('arrayB = ', arrayB);

console.log(addArray(arrayB));

function addArray(array) {
    const Newarr = [];

    for(let i=0; i < array.length; i++){
        Newarr[i] = array[i] + 10; 
    }

    return Newarr;
}


//exercise 11k: create a function that takes an array and returns how many numbers in the array are greater than 0.

const arr1 = [2,0,4,-5,6,-7,8];

console.log('Positive Number: ', countPositive(arr1));


function countPositive(array) {
    let count = 0;

    for(let i=0; i<array.length; i++){
        if(array[i] > 0){
            count++;
        }
    }

    return count;
}


//exercise 11L: create a function that takes an array and returns an Object with minimum an maximum value;
// example: minMax([1, -3, 5]) => {min: -3, max: 5}


const minmaxArr = [2,3,-4,6,-2,-1,5];

console.log(minMax(minmaxArr));

function minMax(arr) {
    
    let max = arr[0];
    let min = arr[0];

    
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        
        if(arr[i] < min){
            min = arr[i];
        }
    }
    
    const Object = {
        Max: max,
        Min: min
    }
    
    return Object;
    
}


// exercise 11n: Create a function countWords(words) that takes an array of strings
// and returns an object with how many times each string appeared.
// countWords(['apple', 'grape', 'apple', 'apple')) => { apple: 3, grape: 1 }
// (Hint: you can access a property using a variable: object[variable];
// This uses the value inside the variable as the property name).


const words = ['apple', 'grape', 'apple', 'grape', 'apple', 'grape', 'orange', 'mango', 'orange'];

console.log(countWords(words));


function countWords(array) {
    const wordsObj = {};
    
    for (let i = 0; i < array.length; i++) {
        
        if(wordsObj[array[i]] === undefined){
            wordsObj[array[i]] = 1;
        }else{
            wordsObj[array[i]]++;
        }
    }

    return wordsObj;
}
