
// ==============Problem #1================
var arr = [null,-7,63,-25,true,20,0,'',97,'Jubayer'];

var result = arr.map(element=>{
    if (element<0 && element%5===0) {
        return element*10;
    }
    else if (element===0 || element===null || element===''){
        return 1;
    }
    else if (element === true) {
        return undefined;
    }
    else{
        return element;
    }
});
console.log(result);

// ==============Problem #2================

var list = [2,8,10,2,3,9];

var length = list.length-1;

for (var i = 0; i<length; i++){
    for (var j=0; j<length; j++){
        if (list[j]>list[j+1]){
            [list[j], list[j + 1]]= [list[j+1],list[j]];
        }
    }
}
list;

var mySort = list.sort((a,b)=> {
    return b-a;
});
mySort;