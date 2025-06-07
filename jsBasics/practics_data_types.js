'use strict';

let aString = 'Command_line';
let numbers = 452;
let boolPossitive = true;
let boolNegative = false;
let helloString = ' Привет ';
let floatString = "50.56789";
let includeString = 'Добро пожаловать';

console.log(helloString.trim().toLowerCase()); // output 'привет' trim = deleted spaces, toLowerCase...;

console.log(aString.replace('Command', 'Value')); // aString.replace(current_string(can be part text), replace on another string) result == Value_line;

console.log(aString.includes('Command')); // if the subtext present in the variable will be true, if not == false;

console.log(aString.toUpperCase()); // upperCase;

console.log(aString.toLowerCase()); // lowerrCase;

console.log(Number(floatString).toFixed(2)); // string to number.toFixed(2) to string with cut to 2 the first numbers => nuber to string;

console.log(includeString.includes('пока'));


