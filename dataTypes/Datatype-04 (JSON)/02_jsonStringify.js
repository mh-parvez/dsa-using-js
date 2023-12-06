
// todo: JSON.stringify(value, [replacer, space])
// value, A value to encode.
// replacer, Array of properties to encode or a mapping function function(key, value).
// space, Amount of space to use for formatting

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup
console.log(JSON.stringify(meetup, ['title', 'participants'])); // {"title":"Conference","participants":[{},{}]}


//todo: Let’s include in the list every property except room.

room.occupiedBy = meetup; // room references meetup
console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));

console.log(JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));


//todo: Formatting: space

let user = {
  name: "John",
  age: 25,
  roles: {
      isAdmin: false,
      isEditor: true
  }
};
console.log(JSON.stringify(user, null, 4));


