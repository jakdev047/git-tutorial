// filter();

var arr = [1,2,3,4,5,6,7,8,9,10];

var result = arr.filter(function(item){
    if (item % 2 === 0) {
        return arr[item];
    }
});
console.log(result);

// manual apply

// example one
var newArry = [];
for (let i = 0; i <=arr.length-1; i++) {
    if ( arr[i] % 2 == 1) {
        newArry.push(arr[i]);
    }
    
}
console.log(newArry);

// example two

var num = [1,2,3,4,5,6,7,8,9,10];

var evenSuquare = [];

for (let i = 0; i <= num.length-1; i++) {
    if (num[i] % 2 ===0) {
        evenSuquare.push(num[i]*num[i]);
    }
}

for (let i = 0; i <= num.length - 1; i++) {
    if (num[i] % 2 === 1) {
        evenSuquare.push(num[i]);
    }
}

var total = evenSuquare.sort(function(a,b){
    return a - b;
})
console.log(total);

// example three

function myFilter(value,cbf) {
    var newNum = [];
    for (let i = 0; i <= value.length-1; i++) {
        if (cbf(value[i])) {
            newNum.push(value[i]);
        }
        
    }
    return newNum;
}

var newResult = myFilter(arr,function (element) {
        return element % 2 === 0;
})
console.log(newResult);

var newResult1 = myFilter(arr, function (element) {
    return element % 2 === 1;
})
console.log(newResult1)


