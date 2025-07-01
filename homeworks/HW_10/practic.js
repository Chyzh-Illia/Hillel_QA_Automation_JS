class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    console.log(
      `Машина: ${this.brand} ${this.model}, Год выпуска: ${this.year}`,
    );
  }

  changeYear(newYear) {
    if (newYear > 1885 && newYear <= new Date().getFullYear()) {
      this.year = newYear;
      console.log(`Год выпуска обновлён на ${newYear}`);
    } else {
      console.log(`"Некорректный год"`);
    }
  }
}

const car = new Car("Renault", "Megane", 2017);

car.getInfo();
car.changeYear(2020);
car.getInfo();