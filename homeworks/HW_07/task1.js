function handleEven() {
    console.log('number is even');
}
function handleOdd() {
    console.log('number is odd');
}
function handleNumber(value, callbackEven, callbackOdd) {
    if (value % 2 === 0) {
        callbackEven();
    }
    else {
        callbackOdd();
    }
}
handleNumber(2, handleEven, handleOdd);
