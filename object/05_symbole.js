/*

todo: By specification, only two primitive types may serve as object property keys:

- string type
- symbol type.

A “symbol” represents a unique identifier.
A value of this type can be created using Symbol():
let id = Symbol();

we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:
let id = Symbol("id");

*/

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false

// let id = Symbol("id");
// console.log(id.toString()); // Symbol(id)

let id3 = Symbol("id");
console.log(id3.description); // id

let user = {
  name: "John",
  [id1]: 123 // not "id": 123
}


//todo: read from the global registry

let id4 = Symbol.for("id4"); // if the symbol did not exist, it is created
let idAgain = Symbol.for("id4");

console.log( id4 === idAgain ); // true, the same symbol

console.log(Symbol.keyFor(id4)) // get symbol by name

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global
console.log( localSymbol.description ); // name
/*

todo: Summary,
Symbol is a primitive type for unique identifiers.
Symbols are created with Symbol() call with an optional description (name).
Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.

Symbols have two main use cases:

Note-01. “Hidden” object properties.If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

Note-02. There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.

Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. But most libraries, built-in functions and syntax constructs don’t use these methods.
*/

