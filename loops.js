/* let i = 3;
while (i){
    console.log(i);
    i--;
} */

let i = 0;
let res = '';
while (i < 16){
    res += 'Na';
    i++;
    if (i == 16){
        console.log(res + "Batman!");
    }
}

res = '';

for (let counter = 0; counter < 16; counter++){
    res += 'OP';
    if (counter == 15){
        console.log(res + "Batman!");
    }
}