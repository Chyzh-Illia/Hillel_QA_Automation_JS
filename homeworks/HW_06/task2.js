function verifyAge(age) {
    return age >= 18;
}   

console.log(verifyAge(15));
console.log(verifyAge(25));



const verifyAgeFuncArrow = (age) => age >= 18;

console.log(verifyAgeFuncArrow(15));
console.log(verifyAgeFuncArrow(25));



function verifyRangeAge(age) {
    return age >= 18 && age <= 60;
}

console.log(verifyRangeAge(17));
console.log(verifyRangeAge(61));
console.log(verifyRangeAge(59));