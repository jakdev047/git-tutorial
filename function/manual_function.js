var num = [1,2,3,4,5,6,7,8,9];


// map();
function myMap(value,cbf) {
    let sum =[];
    for (let i = 0; i <=num.length-1; i++) {
        sum.push(cbf(value[i]));
        
    }

    return sum;
}


var result = myMap(num,function (item) {
    return item + 10 ;
})

result;

// filter()

function myFilter(value, cbf) {
    let filtered = [];
    for (let i = 0; i <= num.length - 1; i++) {
        if(cbf(value[i])){
            filtered.push(value[i]* value[i]);
        }
        else{
            filtered.push(value[i]);
        }

    }

    return filtered;
}

var filterResult = myFilter(num,function(item) {
    return item % 2 === 0;
})

filterResult;

// reduce() 

function myReduce(value,cbf) {
    let add = 0;
    for (let i = 0; i < value.length; i++) {
        add += cbf(value[i]);
        
    }
    return add;
}

var resultReduce = myReduce(num,function (item) {
    return item;
})

resultReduce;

// foreach()

var skill = ['HTML5','CSS3','Bootstrap 4','Vanilla JS','JQuery'];


// process one

function myForEach(value,cbf) {
    for (let i = 0; i <=value.length-1; i++) {
        return cbf(value);
        
    }
}

var resultForEach = myForEach(skill,function (item) {
    return 'I Know : ' + item[0];
})
console.log(resultForEach);

var resultForEach1 = myForEach(skill, function (item) {
    return 'I Know : ' + item[1];
})
console.log(resultForEach1);


// process two

function myForEach2(value, cbf) {
    for (let i = 0; i <= value.length - 1; i++) {
        cbf(value[i]);

    }
}

var resultForEach = myForEach2(skill, function (item) {
    // return 'I Know : ' + item;
    console.log("I Know : " + item);
});


console.log(resultForEach);

// sort()

