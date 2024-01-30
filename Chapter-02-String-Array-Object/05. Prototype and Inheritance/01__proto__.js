// Summary:
// In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
// We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
// The object referenced by [[Prototype]] is called a “prototype”.
// If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
// Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
// If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
// The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`); // Our: jumps
    } else {
        console.log(`Inherited: ${prop}`); // Inherited: eats
    }
}

