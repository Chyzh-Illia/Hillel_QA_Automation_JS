async function  getFirstTodo() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await data.json();
    console.log(todo.title);
}

getFirstTodo();


// ✅ Задание 1 — Базовый уровень
// Сделай функцию getFirstTodo(), которая:

// делает fetch на https://jsonplaceholder.typicode.com/todos/1

// получает JSON

// выводит в консоль title задачи.