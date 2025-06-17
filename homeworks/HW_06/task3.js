// function checkOrder(available, ordered) {
//     if (available < ordered) {
//         return 'Your order is too large, we don’t have enough goods.';
//     } else if (ordered === 0) {
//         return 'Your order is empty';
//     }
//     return 'Your order is accepted';
// }


console.log(checkOrder(10, 5));    // "Your order is accepted"
console.log(checkOrder(7, 7));     // "Your order is accepted"
console.log(checkOrder(3, 0));     // "Your order is empty"
console.log(checkOrder(0, 0));     // "Your order is empty"
console.log(checkOrder(5, 10));    // "Your order is too large, we don’t have enough goods."
console.log(checkOrder(0, 1));     // "Your order is too large, we don’t have enough goods."
console.log(checkOrder(100, 100)); // "Your order is accepted"
console.log(checkOrder(50, 51));   // "Your order is too large, we don’t have enough goods."
console.log(checkOrder(20, 0));    // "Your order is empty"
console.log(checkOrder(1, 1));     // "Your order is accepted"

function checkOrder(available, ordered) {
    if (ordered === 0) return 'Your order is empty';
    
    return available < ordered 
        ? 'Your order is too large, we don’t have enough goods.' 
        : 'Your order is accepted';
}