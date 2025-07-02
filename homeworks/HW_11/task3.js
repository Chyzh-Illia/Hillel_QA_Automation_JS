async function fetchData() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data1 = await response1.json();
        const response2 = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data2 = await response2.json();
        console.log(Promise.all([data1, data2]));
    }   catch (error) {
        console.error("Error:", error);
    }
}

fetchData2();


async function  fetchDataPromise() {
    try {
        const [data1, data2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1').then(result => result.json()),
            fetch('https://jsonplaceholder.typicode.com/users/1').then(result => result.json())
        ]);
        
        console.log("Todo:", data1);
        console.log("User:", data2);
    
    }   catch (error) {
        console.log("Error:", error);
    }
}

fetchDataPromise();