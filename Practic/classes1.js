class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    return `Пользователь: ${this.name}, Email: ${this.email}`;
  }
}

const userGetInfo = new User("John", "temp@gmail.com");
console.log(userGetInfo.getInfo());

class Product {
  constructor(title, price, quantity) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
  totalPrice() {
    return this.title + "Price: " + this.price * this.quantity;
  }
}

const getProduct = new Product("Some items -> ", 20, 3);
console.log(getProduct.totalPrice());

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return `${this.name} издаёт звук`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return `${this.name}: Мяу`;
  }
}

const soundAnimal = new Animal("Зверь");
const soundCat = new Cat("Кошка");

console.log(soundAnimal.makeSound());
console.log(soundCat.makeSound());

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect1 = new Rectangle(10, 30);
const rect2 = new Rectangle(32, 21);

console.log(rect1.getArea());
console.log(rect2.getPerimeter());

class Vehicle {
    constructor(type, wheels) {
        this.type = type;
        this.wheels = wheels;
    }

    info() {
        return `Тип: ${this.type}, колёс: ${this.wheels}`;
    }
}

class Car extends Vehicle {
    constructor(brand, wheels) {
        super(wheels);
        this.brand = brand;
        this.wheels = wheels
    }

    info() {
        return `Тип: автомобиль ${this.brand}, колёс: ${this.wheels}`;
    }
}

const getInfoVehicle = new Vehicle("Авто", 4);
const getInfoCar = new Car("Renault", 8);

console.log(getInfoCar.info());
console.log(getInfoVehicle.info());
// 📌 Уровень с super():
// Класс Vehicle:

// type, wheels

// метод info() — "Тип: <type>, колёс: <wheels>"

// Создай класс Car, который расширяет Vehicle, добавляет brand, и info() возвращает:
// "Тип: автомобиль <brand>, колёс: <wheels>"