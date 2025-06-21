const numbersList = [1,10,14,2,4,5,43,34];
const arrCopy = [...numbersList]

const sortArr = arrCopy.sort(function (a, b) {
    return a -b ;
})

console.log(numbersList);
console.log(arrCopy);