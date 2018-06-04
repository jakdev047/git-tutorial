
/*
    while (condition){
        // loop body
    }
*/

// var i =0;
// while (true) {
//     if (i<=10) {
//         console.log(i);
//     }
//     i++;
// }

var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

var a = 0;
while (a<=30) {
    console.log(a);
    a+=3;
}

var p = 0;
while (p<=20) {
    if (p % 2 == 0) {
        console.log(p);
    }
    p++;
}

var q = 0;
while (true) {
    console.log(q);
    if (q==16) {
        break;
    }
    q++;
}