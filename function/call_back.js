// filter(); 

// [ array] Returns the new filtered array.

let person = [
    {age : 20, name: 'Rony' },
    { age: 14, name: 'Hasan' },
    { age: 18, name: 'Karim' },
    { age: 22, name: 'Jitu' },
    { age: 12, name: 'Robin' },
    { age: 10, name: 'Sajal' },
];

let result =person . filter( item=> {
    return item.age >= 18
});
console.log(result);

// map();
let arr =[1,2,3,4,5,6]
let newArr = arr.map(item=>{
    if (item % 2 === 0){
       return item * item;
    }
    else{
        return item;
    }
});
console.log(newArr);

// callback function

function sayname(name) {
    return (name);
}

function newFunc(name,sayname) {
   return sayname(name); 
}

var newResult = newFunc('Jubayer',sayname);

console.log(newResult);

var another = newFunc('joy',sayname);
console.log(another);