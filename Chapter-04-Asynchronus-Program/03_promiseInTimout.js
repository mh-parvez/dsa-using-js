function promiseTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

promiseTime()
  .then(() => {
    console.log("resolve");
  })
  .catch(() => {
    console.log("reject");
  });
