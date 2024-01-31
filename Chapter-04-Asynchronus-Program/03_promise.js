const kitchen = ["🍚", "🥦", "🥔", "🧅"];

console.log("Script Start");

//new Promise return an object {status: pending, value: undefined}
const friedRice = new Promise((resolve, reject) => {
  if (
    kitchen.includes("🍚") &&
    kitchen.includes("🥦") &&
    kitchen.includes("🧅")
  ) {
    resolve({
      status: true,
      value: "fried-rice 🍲",
    });
  } else {
    reject(new Error("Something is missing for fried-rice"));
  }
});

// console.log(friedRice);

friedRice
  .then((resolveValue) => {
    console.log(resolveValue);
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => console.log('Inside Timeout'), 0) //less priority

console.log("Script End");
