// Todo: ⏰ SetTimeout:

console.log("Script Start");

const timeID = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

clearTimeout(timeID);

console.log("Script End");

// Todo: ⏰ SetIntervel:

const body = document.body;
const button = document.querySelector("button");

const intervelID = setInterval(() => {

  const red = Math.floor(Math.random() * 125);
  const green = Math.floor(Math.random() * 125);
  const blue = Math.floor(Math.random() * 125);

  const rgb = `rgb(${red}, ${green}, ${blue})`;
  body.style.background = rgb;

}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervelID);
});
