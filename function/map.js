// map();

var num = [1,2,3,4,5,6,7,8,9];

//call back function

function myMap(value,cbf) {
    var newMap = [];

    for (let i = 0; i < num.length; i++) {

        newMap.push(cbf(value[i]))
        
    }

    return newMap;
}


var result = myMap(num,function(item){
    return item - 9;
});

console.log(result);


// 