const URL = `https://jsonplaceholder.typicode.com/posts`;

console.log(fetch(URL)); //return a pending promise

fetch(URL)
  .then((response) => {
    if (response.ok) {
      //also return a promise
      return response.json();
    } else {
      throw new Error("Something went worng");
    }
  })
  .then((data) => {
    console.log(data);
    printer(data);
  })
  .catch((e) => {
    console.log(e);
  });


const p = document.querySelector("p");
const button = document.querySelector("button");

function printer(data) {
  button.addEventListener("click", () => {
    data.forEach((user) => {
      p.innerHTML += `<li> ${user.id} 🧃 ${user.title} ${user.body}</li> `;
    });
  });
}
