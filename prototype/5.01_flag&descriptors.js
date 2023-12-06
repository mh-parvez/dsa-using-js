"use strict";

//todo: Property flags, In "non-strict" mode, no errors occur
`
Object properties, besides a value, have three special attributes (so-called “flags”):
1. writable - if true, the value can be changed, otherwise its read-only.
2. enumerable - if true, then listed in loops, otherwise not listed.
3. configurable - if true, the property can be deleted and these attributes can be modified, otherwise not
`

let user = {
    name: "John"
};
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');


// let user = {};
Object.defineProperty(user, "name", {
    value: "John"
});
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');


//todo: Non-writable

Object.defineProperty(user, "name", {
    writable: false
});
// user.name = "Pete"; // Error: Cannot assign to read only property 'name'

// console.log(user.name)


//todo: Non-enumerable

let person = {
    name: "John",
    toString() {
        return this.name;
    }
};
// By default, both our properties are listed:
for (let key in person) console.log(key); // name, toString

Object.defineProperty(person, "toString", {
    enumerable: false
});
// Now our toString disappears:
for (let key in person) console.log(key); // name


//todo: Non-configurable

Object.defineProperty(user, "name", {
    configurable: false
});

// user.name = "Pete"; // works fine
// delete user.name; // Error


//todo: Object.defineProperties, that allows to define many properties at once.

Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});

//todo: Object.getOwnPropertyDescriptors, to get all property descriptors at once. Normally when we clone an object, But that does not copy flags. Another difference is that for..in ignores symbolic and non-enumerable properties, but Object.getOwnPropertyDescriptors returns all property descriptors including symbolic and non-enumerable ones.

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
console.log(clone)


//todo: Sealing an object globally
`
Property descriptors work at the level of individual properties.
There are also methods that limit access to the whole object:
Object.preventExtensions(obj)
Forbids the addition of new properties to the object.
Object.seal(obj)
Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze(obj)
Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

And also there are tests for them:
Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj)
Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj)
Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
`


