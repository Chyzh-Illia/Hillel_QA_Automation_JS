const person = {
    firstName: "John",
    lastName: "Snow",
    age: 34,
}

person.email = "john.snow@temp.com";

delete person.age;

console.log(person);




// Завдання 4
// Створіть об'єкт person з такими властивостями:
// firstName: рядок, представляє ім'я особи.
// lastName: рядок, представляє прізвище особи.
// age: число, представляє вік особи.
// Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
// Видаліть властивість age з об'єкта person.
// Виведіть оновлений об'єкт person в консоль.