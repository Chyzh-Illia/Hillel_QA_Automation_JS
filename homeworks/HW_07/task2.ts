function recursiveCounter(num: number): void {
    console.log(num);

    if (num <= 0 ) {
        return;
    }
    recursiveCounter(num - 1);
}

recursiveCounter(5);

