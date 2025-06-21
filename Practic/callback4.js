// function customFilter(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//         result.push(arr[i])
//     }
//   }
//   return result;
// }

// function customFilter(arr, callback) {
//   return arr.filter(callback);
// }

const customFilter = (arr, callback) => arr.filter(callback);

const resultarr = customFilter([10, 15, 20, 25], function(item) {
  return item > 15;
});
console.log(resultarr); // [20, 25]




// Создай функцию customFilter(arr, callback), которая возвращает новый массив только с теми элементами, для которых callback возвращает true.