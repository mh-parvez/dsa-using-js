const users = ["Abu Rayhan", "Shaker Hossian", "Akib Ahmed", "Alvi Chowdhuri"];

let index = -1;
let user = users[++index];

setInterval(() => {
  user = users[index++];
  console.log(user);

  if (users.length === index) {
    index = 0;
  }
}, 500);
