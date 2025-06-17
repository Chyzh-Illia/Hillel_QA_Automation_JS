function recursiveCounter(num) {
    console.log("".concat(num));
    if (num <= 0) {
        return;
    }
    recursiveCounter(num - 1);
}
recursiveCounter(5);
