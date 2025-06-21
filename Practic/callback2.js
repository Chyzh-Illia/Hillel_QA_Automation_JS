function waitAndRun(delay, callback) {
    setTimeout(() => {
        callback(delay);
    }, delay)
}

waitAndRun(5000, (delay) => {
    console.log(`${delay} мс прошло`);
})



// Напиши функцию waitAndRun(callback), которая вызывает переданный callback через 2 секунды.
// setTimeout(function() {}, 1000)