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