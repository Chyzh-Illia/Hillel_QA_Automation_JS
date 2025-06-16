// function declaration
function square(value: number): number {
    return value * value;
}

console.log(square(10));

//Arrow function
const arrowGreatestFunction = (value1: number, value2: number): number => 
    value1 > value2 ? value1 : value2; 

console.log(arrowGreatestFunction(5, 10));


const diffrenceFunction = (value1: number, value2: number): number =>
    value1 - value2;

console.log(diffrenceFunction(3, 5));

const evenOdd = (value: number): string =>
    value % 2 === 0 ? "Чётное число" : "Не чётное число";

console.log(evenOdd(5))


export function greetTwoPeople(name1: string, name2: string): string {
    return `Поздравляю ${name1} и ${name2}`;
}

console.log(greetTwoPeople("Illia", "John"));

