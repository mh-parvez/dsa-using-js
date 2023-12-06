
// todo: JSON.stringify
// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);
console.log(typeof json); // we've got a string!
console.log(json);


let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
console.log(JSON.stringify(meetup));


//note: JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
//note: Function properties (methods), Symbolic keys and values & Properties that store undefined.

let user = {
    sayHi() { // ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};
console.log(JSON.stringify(user)); // {} (empty object)


//note: The important limitation, there must be no circular references.

let room = {
  number: 23
};

let meetup2 = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup2.place = room;       // meetup references room
room.occupiedBy = meetup2; // room references meetup
JSON.stringify(meetup2); // Error: Converting circular structure to JSON




