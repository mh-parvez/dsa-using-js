
const kitchen = ["🍚", "🥦", "🥔", "🧅"];

const friedRice = () => {
    return new Promise((resolve, reject) => {
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
}

friedRice()
  .then((resolveValue) => {
    console.log(resolveValue);
  })
  .catch((err) => {
    console.log(err);
  });
