'use strict';

const constNumber = 39;
let multiplyFunction = '';

for (let count = 1; count <= 10; count++) {
    multiplyFunction = constNumber * count;
    console.log(`${constNumber} x ${count} = ${multiplyFunction}`);
}