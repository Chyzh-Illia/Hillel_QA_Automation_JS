function greet(name, callback) {
  const result = name + " !";
  callback(result);
}

greet("Jack", (args) => {
  console.log(args);
});

// Напиши функцию greet(name, callback), которая вызывает callback с переданным именем.
