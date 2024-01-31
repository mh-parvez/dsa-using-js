const URL = `https://jsonplaceholder.typicode.com/posts`;

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went worng"));
      }
      //for network error
      xhr.onerror = () => {
        reject(new Error("Something went worng"));
      };
    };
    xhr.send();
  });
}

sendRequest("GET", URL)
  .then((response) => {
    // console.log(response)
    const data = JSON.parse(response);
    // console.log(data)
    return data;
  })
  .then((data) => {
    const id = data[3].id;
    console.log(id);
    return id;
  })
  .then((userID) => {
    url = `${URL}/${userID}`;
    return sendRequest("GET", url);
  })
  .then((user) => {
    const newUser = JSON.parse(user);
    console.log(newUser);
    document.write(newUser.title);
  }).catch((e) => {
    console.log(e);
  });