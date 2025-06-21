function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

myForEach([1, 2, 3], (item, index) => {
  console.log(`Элемент: ${item}, индекс: ${index}`);
});

// Напиши свою реализацию метода forEach, которая принимает массив и callback, и вызывает его для каждого элемента.
