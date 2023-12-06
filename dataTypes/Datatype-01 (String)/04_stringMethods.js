
//!mdn.str methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var userName = 'mehedi hasan parvez'
var sentence = 'Lorem ipsum dolor sit amet sit consectetur adipisicing elit.'

console.log(userName.at(5)) //return index

console.log(userName.charAt(4))

console.log(userName.charCodeAt(4))

console.log(userName.codePointAt(4))

console.log("Hi ".concat("Welcome! ", userName))

console.log("Lima".constructor)

console.log(userName.endsWith("parvez"))

console.log(String.fromCharCode(78, 87, 64, 96))

console.log(sentence.includes('sit'))

console.log(sentence.indexOf("sit"))

console.log(sentence.lastIndexOf("sit"))

console.log("ABC".length)

console.log("📌", "ba".localeCompare("ab"))

console.log(sentence.match("sit"))

console.log("hasan".padEnd(12, " kabir"))

console.log("hasan".padStart(12, " kabir"))

console.log("Jamil ".repeat(3))

console.log("Jamal Hasan".replace("Jamal", "Mr."))

console.log(sentence.replaceAll("sit", "XX"))

console.log(sentence.search("sit"))

console.log(userName.slice(7)) // (start, end), (-7)

console.log(userName.split(" "))

console.log(sentence.startsWith("Lore"))

console.log("ABC".toLowerCase(), "xyz".toUpperCase())

console.log("  hasan".trimStart(), "hasan  ".trimEnd(), "  hasan   ".trim())

