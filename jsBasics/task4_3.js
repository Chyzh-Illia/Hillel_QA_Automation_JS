'use strict';

const radius = 10;
const height = 15;

let result = Math.PI * (radius**2) * height;
let toFixedResult = result.toFixed(2);

console.log(`Об'єм циліндра за формулою π * radius^2 * height дорівнює ${Number(toFixedResult)}`);