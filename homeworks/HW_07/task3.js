function devide(numretator, denominator) {
  if (denominator === 0) {
    throw new Error("Exception");
  }
  if (typeof denominator !== "number" || typeof numretator !== "number") {
    throw new Error("args is not a number");
  }
  return numretator / denominator;
}

try {
  var result = devide("7", 5);
  console.log(`successfuly: ${result}`);
} catch (error) {
  console.log(error);
} finally {
  console.log("Робота завершена");
}

try {
  var result = devide(10, 2);
  console.log(`successfuly: ${result}`);
} catch (error) {
  console.log(error);
} finally {
  console.log("Робота завершена");
}

try {
  var result = devide(7, 0);
  console.log(`successfuly: ${result}`);
} catch (error) {
  console.log(error);
} finally {
  console.log("Робота завершена");
}