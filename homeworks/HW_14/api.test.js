const axios = require("axios").default;

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    console.log(response.data);
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

test("create post", async () => {
  const response = await instance.post("posts", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: {
      title: "My POST2",
      body: "Body 2",
      userId: 10,
      id: 100,
    },
  });
  expect(response.status).toEqual(201);
});

test("update patch", async () => {
  const response = await instance.patch("posts/100", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: {
      title: "My custom title",
    },
  });
  expect(response.status).toEqual(200);
});

test("delete post 100", async () => {
  const response = await instance.delete("posts/100", {});
  expect(response.status).toEqual(200);
});

test("put post 100", async () => {
  const response = await instance.put("posts/100", {
    data: {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  expect(response.status).toEqual(200);
});

test("Get all post list", async () => {
  const response = await instance.get("posts", {});
  expect(response.status).toEqual(200);
});

// Задача:

// створити 5 запитів за допомогою методів GET, POST
// обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ
// Додаткове завдання: (не обовʼязкове)
// Назва: Налаштування інтерсепторів

// Складність: середній

// додати логування за допомогою Axios interceptors запитів і респонсів
// До домашки має бути прикріплений ПР, і скриншот успішного виконання тестів на локальній машині.
