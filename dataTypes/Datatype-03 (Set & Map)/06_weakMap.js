
//todo: why? for, overwriting the reference

let john = { name: "John" };
let array = [ john ];
john = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

//todo: the first difference between Map and WeakMap is that keys must be objects, not primitive values:

let john2 = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john2, "...");

john2 = null; // overwrite the reference
// john2 is removed from memory!

/*
note: Compare it with the regular Map example above. Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).
note: WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.
note: WeakMap has only the following methods:
weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)
*/

