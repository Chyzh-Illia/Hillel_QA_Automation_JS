const axios = require(`axios`);


async function getUserInfo() {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return await response.data;    
    }
    catch(error){
        console.error(`Error message: ${error}`);
        return null;
    }
}

test(`get response data:`, async () => {
    const data = await getUserInfo();
    expect(data.userId).toBe(1)
});