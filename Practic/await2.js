async function getUserNames() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const todo = await data.json();
    todo.forEach(element => {
        console.log(element.name)
    });
}

getUserNames();


//  Задание 2 — Список пользователей
// Напиши функцию getUserNames(), которая:

// делает fetch на https://jsonplaceholder.typicode.com/users

// получает список пользователей (массив)

// выводит в консоль имена пользователей через forEach().