
//todo: why map?

let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object
visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log(visitsCountObj["[object Object]"]); // 123


//todo: map properties

var userID = new Map()

userID.set("akbar", 202002037)
userID.set("kabir", 202002037)
// every map.set() call returns the map itself, so we can “chain” the calls:
userID.set("tanvir", 202002037).set("jaman", 39483930) 

console.log(userID.get("kabir"))
userID.delete("kabir")
userID.clear()
console.log(userID.has("tanvir"))
console.log(userID.size)
console.log(userID.keys())
console.log(userID)

