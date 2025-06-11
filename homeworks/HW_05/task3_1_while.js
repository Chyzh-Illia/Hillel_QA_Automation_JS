'use strict';

const constNumber = 12;
let count = 0;
let multiplyFunction = '';

while (count < 10) {
    count++;
    multiplyFunction = constNumber * count;
    console.log(`${constNumber} x ${count} = ${multiplyFunction}`);
}