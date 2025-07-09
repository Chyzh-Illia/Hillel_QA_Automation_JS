function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "John" };
const greetUser = greet.bind(user);
greetUser(); // Hello, Alice