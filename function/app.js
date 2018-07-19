/*====================
    Function
========================*/

/*========================
    1st class function
==========================*/

// 01. A function can be store in a variable

/*
    f(){};
    var variable_name = f1;   (just function store )
    var variable_name = f1(); (function call)
*/

function sayname(name){
    return ' Hello ' + name;
}

var hello = sayname;
var fun = sayname('This is function reference');

hello;
fun;


// 02. A function can be store in a variable

var result = hello('This is function store');
result;

var variableStore = function (name) {
    return name;
}
var aonther = variableStore('This is a variable store');
aonther;

// 02. A function can be store in a array

var arr = [1,2,3,4];
arr.push(sayname);
var arr2 = arr;
arr2;

// 03. A function can be store in a object

var obj ={
    func:  sayname,
    print: function (){
        return 'This is method';
    }
}

console.log(obj.func('This is sayname function'));
console.log(obj.print());

// 04. Created when necessary (self invoking function)

var a =20;
var b =(function(a){
    return a+a;
})(20);
 var c = a+b;
 c;

 // 05. Pass an argument

function sum(a,b) {
    return a+b;
}
function sub(a, b) {
    return a - b;
}
function product(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

var result = function (p,q,functionMethod){
    return functionMethod(p, q);
}
var r1 = result(20,10,sum);
r1;

var r2 = result (30,20,sub);
r2;

var r3 = result(30, 20, product);
r3;
var r4 = Math.ceil(result(30, 20, div));
r4;

function greetings(data){
    return data;
}

var gdMr = function (name){
    return 
}