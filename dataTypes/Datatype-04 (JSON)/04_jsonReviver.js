
// todo: Using reviver, imagine, we got a stringified meetup object from the server.

var str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

var meetup = JSON.parse(str);
console.log(meetup.date.getDate()); // Error!, The value of meetup.date is a string, not a Date object

let meetup = JSON.parse(str, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
console.log(meetup.date.getDate()); // now works!


//todo: By the way, that works for nested objects as well

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
console.log( schedule.meetups[1].date.getDate() ); // works!


//notes: JSON is a data format that has its own independent standard and libraries for most programming languages.
//notes: JSON supports plain objects, arrays, strings, numbers, booleans, and null.
//notes: JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
//notes: Both methods support transformer functions for smart reading/writing.
//notes: If an object has toJSON, then it is called by JSON.stringify.


