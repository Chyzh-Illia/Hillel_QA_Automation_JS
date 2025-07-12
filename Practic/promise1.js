// function foo() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => res.json())
//     .then(convertTodos)
//     .then((response) => {
//         console.log(response);
//         return response;
//     })
//     .then((res) => console.log(res.customId.firstName));
// }

// foo();


// function convertTodos(todo) {
//     console.log(todo);
//         return {...todo, customId: {
//             firstName: 'John',
//             lastName: "Snow"
//         }, }
// }


async function  foo() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todoss/1');
        const todo = await data.json();
        if (!data.ok) {
            throw new Error('My Error');
        }
        console.log(todo);
    } catch (error) {
        console.log(error);
    }
}

foo();