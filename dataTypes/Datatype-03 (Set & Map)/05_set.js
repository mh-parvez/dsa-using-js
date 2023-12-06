
//todo: why set?

// The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.
// For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.
// Set is just the right thing for that:

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
    console.log(user.name); // John (then Pete and Mary)
}


const setOfNumbers = new Set()

setOfNumbers.add(5).add(6).add(5)
setOfNumbers.delete(5)

console.log(setOfNumbers.has(5))
console.log(setOfNumbers.size)

console.log(setOfNumbers.keys())
console.log(setOfNumbers.values()) //gave an iterator

console.log(setOfNumbers instanceof Set)
setOfNumbers.clear()


//todo: array, string from set

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const numbers = new Set(arr)
const charcters = new Set("ABC")

let sum = 0
for (const value of numbers) {
    sum += value
}
console.log(sum)


//todo: array > set > array (2 in 1)

const uniqueNumbersOfArray = [...new Set([45, 89, -1, 76, 89])]
const uniqueCharctersOfString = [...new Set("hsahahLovve")]
console.log(uniqueNumbersOfArray)
console.log(uniqueCharctersOfString)


//todo: basic math 

let a = new Set([1,2,3])
let b = new Set([5,3,1])

let union = new Set([...a],[...b])
let intersection = new Set([...a].filter(n => b.has(n)))
let defference = new Set([...a].filter(n => !b.has(n)))

console.log(union)
console.log(intersection)
console.log(defference)


