let users = [
  { id: 1, name: "A", gender: "m" },
  { id: 5, name: "B", gender: "f" },
  { id: 9, name: "C", gender: "m" },
];

let [{ id }, { name }, { gender }] = users; // values are different objcets
console.log(id, name, gender);

let [{ id: user1id }, { name: user2name }, { gender: user3gender }] = users; // changing name aslo
console.log(user1id, user2name, user3gender);
