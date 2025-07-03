async function fetchData() {
  try {
    const [data1, data2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json(),
      ),
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json(),
      ),
    ]);

    console.log("Todo:", data1);
    console.log("User:", data2);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

async function fetchDataPromise() {
  try {
    const [data1, data2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json(),
      ),
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json(),
      ),
    ]);

    console.log("Todo:", data1);
    console.log("User:", data2);

    const fastest = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => ({ source: "todo", data })),

      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => ({ source: "user", data })),
    ]);

    console.log(`Response: ${fastest.source}`);
    console.log(fastest.data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchDataPromise();
