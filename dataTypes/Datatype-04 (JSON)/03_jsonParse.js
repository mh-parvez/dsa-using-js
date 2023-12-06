
// todo: JSON.parse(), let value = JSON.parse(str, [reviver]);

// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);

// for nested objects:
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);


// Here are typical mistakes in hand-written JSON (sometimes we have to write it for debugging purposes):

let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;

// Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.








