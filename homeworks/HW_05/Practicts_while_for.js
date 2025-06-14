'use strict';

let container = [];
let list = {
    user : "John",
    phone : 99999999,
    location : "Poland",
    city : "Krakow",
}
const value = 50;
for (let count = 0; count <=20; count += 5) {
    container.push(count);
}

console.log(container);

console.log(list);


let countWhile = 0;
let containerWhile = [];

while (countWhile < 10) {
    countWhile += 1;
    containerWhile.push(countWhile);
}

console.log(containerWhile);