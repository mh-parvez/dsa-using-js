
let billion = null

billion = 1000000000;
billion = 1_000_000_000; 
billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

console.log(billion);

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

console.log(7.3e9);  // 7.3 billions (same as 7300000000 or 7_300_000_000)

var hexNum = 0xA3;
var octNum = 0o34;
var binNum = 0b111;

console.log((0xA1).toString(10)); // convert: (numType).toString(baseNum)
console.log((0o13).toString(10)); // octal to decimel
console.log((5001).toString(2));  // decimal to binary


//Imprecise calculations

console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

var sum = 0.1 + 0.2;

console.log(sum.toFixed(2)); // "0.30", toFixed string
console.log(+sum.toFixed(2)); // 0.3, convet into number

console.log(+"100px"); // NaN
console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3')); // 12, only the integer part is returned
console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading

console.log(parseInt('a123')); //note: NaN, the first symbol stops the process

console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255, without 0x also works
console.log(parseInt('2n9c', 36)); // 123456

