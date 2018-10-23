console.log("hello world");
console.log("hello back to you");
'use strict';

// let array = [1,2,3]
// console.log(array)

// function sayHello(){
//     console.log("Hello");
// }

// console.log(sayHello)
// <!-- assign array to variable -->
let myArray = ['a','b','c'];

typeof myArray //=> 'object'
console.log(typeof myArray);
let other = myArray;

// <!-- access value in other -->
console.log( other[1] ); 

//takes in TWO callback functions!
function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the same time!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
}

//pass in the callbacks to do them together
doTogether(rubBelly, patHead);



for(item of myArray){
    console.log(item);
}

let sum = 0
myArray.forEach(function(n){
    sum = sum + n
});



myArray.forEach(function(n, idx){
    myArray[idx] = n*n
});

myArray = myArray.map(function(n) {
    return n*n
})

let add = function(total, next){
    return total+next;
}

myArray.reduce(function(total, next){
    return total+next;
}, 5)
