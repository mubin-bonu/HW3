let a = -3;
function GGG() {
    if ( a > 0){
        return console.log('!');
    } else {
        return console.log('!!');
    }
}
GGG();


let arr = [];
for (let i = 0  ; i < 10; i++) {
    arr[i] = 'x';
    
}
console.log (arr);

function call () {
    let b = 1;
    return function () {return b++};
}
let func = call();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
