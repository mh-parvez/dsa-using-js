const URL = `https://jsonplaceholder.typicode.com/users`;

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

/**
 * async always return a promise
 * await, waiting for resolve the proimse
 */

async function getUser() {
  const response = await fetch(URL);
  // console.log(response);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  // console.log(data);
  return data;
}

getUser()
  .then((data) => {
    data.forEach(user => {
        document.body.innerHTML += `<li> 🧁 <b>${user.name}</b>, ${user.email}</li>`
    });
  })
  .catch((err) => {
    console.log(err);
  });
