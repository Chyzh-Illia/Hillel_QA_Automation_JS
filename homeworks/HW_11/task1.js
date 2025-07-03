const fu = (firstName, lastName) => {
    setTimeout(() => {
        console.log(firstName, lastName);
    }, 5000);
};

fu('John', 'Snow');
