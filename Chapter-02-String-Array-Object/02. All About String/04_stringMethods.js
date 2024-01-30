var userName = "Mehedi hasan parvez";
var sentence = "Lorem ipsum dolor sit amet sit consectetur adipisicing elit.";

console.log("ABC".length);

console.log(userName.charCodeAt(6))
console.log(userName.charAt(4));
console.log(userName.codePointAt(4));
console.log(String.fromCharCode(78, 87, 64, 96, 77));

console.log("Hi ".concat("Welcome! ", userName));
console.log("Lima".constructor);

console.log(sentence.indexOf("sit"));
console.log(sentence.lastIndexOf("sit"));

console.log(sentence.includes("sit"));
console.log(sentence.startsWith("Lore"));
console.log(userName.endsWith("parvez"));

console.log(sentence.match("sit"));

console.log("hasan".padStart(12, " kabir"));
console.log("hasan".padEnd(12, " kabir"));

console.log("Jamil ".repeat(3));

console.log("Jamal Hasan".replace("Jamal", "Mr."));
console.log(sentence.replaceAll("sit", "XX"));

console.log(sentence.search("sit"));

console.log(userName.slice(7)); // (start, end), (-7)

console.log(userName.split(" "));

console.log("ABC".toLowerCase(), "xyz".toUpperCase());

console.log("  hasan".trimStart(), "hasan  ".trimEnd(), "  hasan   ".trim());

//todo: All String Methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
