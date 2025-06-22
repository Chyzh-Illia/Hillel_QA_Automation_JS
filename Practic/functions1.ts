// function nameF(name: string): string {
//     return `Welcome ${name}`
// }

// console.log(nameF("Illia"));

// const arrowFunc = (value1: number, value2: number): number => value1 + value2;

// console.log(arrowFunc(3, 5));


// const expressionFunc = function(age: number): string {
//     if (age <= 0) {
//         return "Incorrect age, try again";
//     }   else if (age >= 18) {
//         return "Access granted";
//     }   else {
//         return 'Access denied';
//     }
// }

// console.log(expressionFunc(15));
// console.log(expressionFunc(20));


// const multiplycityFunc = function(number: number): string {
//     return number % 3 === 0 ? "Number is divisible by 3" : "Number is not divisible by 3";
// }

// console.log(multiplycityFunc(7));

const evenFunc = (number: number): string => {
    if (number % 2 === 0 && number > 10) {
        return "Even and greater than 10";
    }   else if (number % 2 === 0 && number <= 10)
        return "Even and less than or equal to 10";
    return "Odd number";
}

console.log(evenFunc(111232323));