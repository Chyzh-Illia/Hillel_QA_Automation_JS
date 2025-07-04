const person = {
    name: 'John',
    age: 24,
    city: "Odesa",
    introduce() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, I'm from ${this.city}`;
    },
};

console.log(person.introduce());


// task 2

const car = {
    brand: "Reanult",
    model: "Megane",
    yearOfPublished: 2017,
    startEngine() {
        return `Двигатель запущен`
    },
}

const objectKeyValue = () => {
    let result = "";
    for (let key in car) {
       result += `key:${key}, value:${car[key]}`;
    }
    return result;
}   

console.log(objectKeyValue());
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));







// 📌 Уровень 1 (основы):
// Создай объект person с полями name, age, city.

// Добавь в объект метод introduce, который возвращает строку:
// "Привет, меня зовут <name>, мне <age> лет, я из <city>."

// 📌 Уровень 2:
// Напиши функцию printObject(obj), которая перебирает объект и печатает ключ: значение в консоль.

// Создай объект car, добавь туда метод startEngine(), который возвращает "Двигатель запущен".

// Используй Object.keys, Object.values, Object.entries для объекта person — выведи их в консоль.