const fetchTodo1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());

const fetchUser1 = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json());

Promise.all([fetchTodo1, fetchUser1])
    .then(([todoData, userData]) => {
        console.log('Todo:', todoData);
        console.log('User:', userData);
    })
    .catch(error => {
        console.error('Error:', error);
    });

Promise.race([
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => ({ source: 'todo', data })),

    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(data => ({ source: 'user', data }))
])
    .then(result => {
        console.log(`Response: ${result.source}`);
        console.log(result.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });