function handleEven(): void {
    console.log('number is even');
}

function handleOdd(): void {
    console.log('number is odd');
}

function handleNumber(value: number, callbackEven:() => void, callbackOdd:() => void ): void {
    if (value % 2 === 0) {
        callbackEven();
}   else {
        callbackOdd();
}
}

handleNumber(2,handleEven, handleOdd);
