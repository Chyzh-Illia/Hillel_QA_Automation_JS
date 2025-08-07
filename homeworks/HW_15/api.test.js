// Завдання 1

// Напишіть функцію за допомогою Axios, яка навмисно надсилає запит на неправильну URL-адресу, викликаючи помилку.
// Потім за допомогою Jest напишіть тест, який перевіряє, чи правильно обробляється помилка та чи повертається належне повідомлення про помилку.

const axios = require("axios");

async function fetchData() {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/500",
    );
    return res.data;
  } catch (error) {
    throw new Error(`Error response`);
  }
}

test("get response failed:", async () => {
  await expect(fetchData()).rejects.toThrow("Error response");
});

// Завдання 2

// Назва: Testing Request Headers and Params Складність: середній

// Створіть функцію за допомогою Axios, щоб зробити запит, який містить кастомні хедери та параметри URL-адреси.
// Напишіть тест Jest, щоб переконатися, що заголовки та параметри правильно включені в запит.

async function fetchWithHeadersAndParams() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      headers: {
        "Header": "value",
      },
      params: {
        userId: 1,
      },
    },
  );
  return response.data;
}

jest.mock('axios');

test('Request contains correct headers and params', async () => {
  axios.get.mockResolvedValue({ data: [] });

  await fetchWithHeadersAndParams();

  expect(axios.get).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/posts',
    expect.objectContaining({
      headers: expect.objectContaining({ 'Header': 'value' }),
      params: expect.objectContaining({ userId: 1 }),
    }),
  );
});


// Завдання 3

// Назва: Mocking Axios in Jest Складність: складний

// Замість того, щоб робити фактичні HTTP-запити, використовуйте Jest, щоб налаштувати моки на реквести з Axios.
// Напишіть тести, які імітують як успішні, так і невдалі HTTP-запити, до замоканих ендпойнтів, і переконайтеся, що ваш код поводиться належним чином.


async function getUserInfo(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

test('should return mocked user data', async () => {
  const mockedUser = {
    id: 1,
    name: 'John Doe',
    username: 'johnd',
  };

  axios.get.mockResolvedValue({ data: mockedUser });

  const result = await getUserInfo(1);

  expect(result).toEqual(mockedUser);
  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
});

async function  putUser(id) {
  const response = await axios.put('https://jsonplaceholder.typicode.com/users/1');
  return response.data;
}

test('put data for user == return mocked data', async () => {
  const putMockedUser = {
    id: 55,
    firstName: 'John',
    lastName: 'Snow'
  }

  axios.put.mockResolvedValue({data: putMockedUser});

  const result = await putUser(10);

  expect(result).toEqual(putMockedUser);
  expect(axios.put).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
})