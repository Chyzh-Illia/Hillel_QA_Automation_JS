const arrObjects = [
    {name: "John", email: "john.snow@temp.com", age: 34, city: "snow wall",},
    {name: "Alex", email: "alex.smith@temp.com", age: 24, city: "trash"},
    {name: "Alin", email: "alin.gun@temp.com", age: 54, city: "Italy"}
]

for (const {name, email, age, city} of arrObjects) {
    console.log(name, email, age, city);
}


// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі