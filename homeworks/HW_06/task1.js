//function declaration

function calculateArea(width, height) {
    return width * height
}

console.log(calculateArea(20, 12));

//ArrowFunction
let calculateAreaArrow = (width, height) => width * height;

console.log(calculateAreaArrow(5, 10));

//function expression

const calculateFuncExpression = function(width, height) {
    return width * height;
}

console.log(calculateFuncExpression(40, 36));

