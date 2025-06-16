"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetTwoPeople = greetTwoPeople;
// function declaration
function square(value) {
    return value * value;
}
console.log(square(10));
//Arrow function
var arrowGreatestFunction = function (value1, value2) {
    return value1 > value2 ? value1 : value2;
};
console.log(arrowGreatestFunction(5, 10));
var diffrenceFunction = function (value1, value2) {
    return value1 - value2;
};
console.log(diffrenceFunction(3, 5));
var evenOdd = function (value) {
    return value % 2 === 0 ? "Чётное число" : "Не чётное число";
};
console.log(evenOdd(5));
function greetTwoPeople(name1, name2) {
    return "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E ".concat(name1, " \u0438 ").concat(name2);
}
console.log(greetTwoPeople("Illia", "John"));
