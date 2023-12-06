
//todo: object to map

let map = new Map([ // array of [key, value] pairs
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);
console.log(map.get('1')) // str1

let user = {
    name: "John",
    age: 30
};
let map2 = new Map(Object.entries(user));  // [ ["name","John"], ["age", 30] ]]
console.log(map2)
console.log(map2.get('name')); // John


//todo: map to object

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange); // 2

map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

obj = Object.fromEntries(map.entries()); // make a plain object (*)

// obj = { banana: 1, orange: 2, meat: 4 }
console.log(obj.orange); // 2

// A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.

