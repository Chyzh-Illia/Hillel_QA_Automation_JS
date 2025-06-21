const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrDoubles = [];

for (let i of arr) {
    if (i % 2 === 0) {
        arrDoubles.push(i);
    }
}

console.log(arrDoubles);