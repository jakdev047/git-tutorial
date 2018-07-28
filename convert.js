//number to string
var myNumber = 20;

console.log(typeof(myNumber));

var myString = String(myNumber);

myString;

console.log(typeof(myString));

if(myNumber === myString) {
    console.log('Yes') 
}
else{
    console.log('No');
} 

// toFixed(how many digit)

var pi = Math.PI;

pi;

console.log(pi.toFixed(3));