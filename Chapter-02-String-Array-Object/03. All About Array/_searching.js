var arr = [23, 4, 5, 8, 10, 45, 7, 12, 11, 88, 33, 77];

console.log(Math.min(...arr));
console.log(Math.max(...arr));

//indexOf(), includes()

console.log(arr.indexOf(10));
console.log(arr.includes(10));

function searchUser(nameList, userName) {
  var user = userName.toLowerCase().trim();
  return nameList.includes(user) ? nameList.indexOf(user) : -1;
}

var nameList = ["jaman", "kamal", "kabir", "asik", "hasan"];
console.log(searchUser(nameList, "Kabir"));
