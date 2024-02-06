//🟢 When we have no idea which typeof data will comeing.

const userURL: string = "https://jsonplaceholder.typicode.com/users";

async function getUser(url: string): Promise<unknown> {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function processUserData() {
  const user = await getUser(userURL);

  if (typeof user === "object") {
    //...perform operation on the response objects...
    // console.log(user)
  }
}

processUserData();
