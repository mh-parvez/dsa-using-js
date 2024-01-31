function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}
myPromise()
  .then((value) => {
    //then always return a promise
    console.log(value);
    value += "bar";
    return value;
    // return Promise.resolve(value); // internally
  })
  .then((value) => {
    console.log(value);
    value += " again";
    return value;
  })
  .then((value) => {
    console.log(value);
  });

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

changeText(heading1, "heading1", "black", 1000)
  .then(() => {
    return changeText(heading2, "heading2", "green", 1000);
  })
  .then(() => {
    return changeText(heading3, "heading3", "blue", 1000);
  })
  .then(() => {
    return changeText(heading4, "heading4", "red", 1000);
  })
  .then(() => {
    return changeText(heading5, "heading5", "yellow", 1000);
  })
  .then(() => {
    return changeText(heading6, "heading6", "gray", 1000);
  })
  .then(() => {
    return changeText(heading7, "heading7", "pink", 1000);
  });
