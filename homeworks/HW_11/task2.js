const fetchTodo1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());

const fetchUser1 = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json());

Promise.all([fetchTodo1, fetchUser1])
    .then(([todoData, userData]) => {
        console.log('GET response', todoData);
        console.log('User:', userData);
    })
    .catch(error => {
        console.error('Error:', error);
    });