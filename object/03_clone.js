
//todo: copy/clone objects

var user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

console.log(user.name); // John
console.log(user.canView); // true
console.log(user.canEdit); // true


//todo: overwritten objects

var user = { name: "John" };
Object.assign(user, { name: "Pete" }); // If the copied property name already exists, it gets overwritten
console.log(user.name); // now user = { name: "Pete" }


//todo: deep clone

// now, it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes

var user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

var clone = Object.assign({}, user);
console.log(user.sizes === clone.sizes); // true, same object

user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 60, get the result from the other one

//step: structuredClone(), here’s how we can use it in our example

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);
console.log(user.sizes === clone.sizes); // false, different objects

user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 50, user and clone are totally unrelated now

/*
Note: Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself. All operations via copied references (like adding/removing properties) are performed on the same single object.To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).
*/

