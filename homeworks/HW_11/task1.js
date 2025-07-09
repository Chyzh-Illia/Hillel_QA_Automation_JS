const fu = (firstName, lastName, delay) => {
    setTimeout(() => {
        console.log(firstName, lastName);
    }, delay);
};

fu('John', 'Snow', 5000);