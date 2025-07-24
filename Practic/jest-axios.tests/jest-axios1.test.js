const { getUserInfo } = require(`./customControllers.js`);

test(`get response data:`, async () => {
  const data = await getUserInfo();
  expect(data).not.toBeNull();
  expect(data.userId).toBe(1);
});
