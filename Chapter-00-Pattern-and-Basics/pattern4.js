
// A A A A A 
// B B B B B 
// C C C C C
// D D D D D
// E E E E E

// "ABC".charCodeAt(0) // 65
// String.fromCharCode(65) // A

let alphabet = 'A'.charCodeAt(0)
let n = 5

for (let i = 0; i < n; i++) {
    let line = ''
    for (let j = 0; j < n; j++) {
        let updateAlphabet = String.fromCharCode(alphabet)
        line += updateAlphabet + ' '
    }
    alphabet++
    console.log(line)
}

console.log('\n')

for (let i = 0; i < n; i++) {
    let line = ''
    for (let j = 0; j < n; j++) {
        let updateAlphabet = String.fromCharCode(alphabet)
        line += updateAlphabet + ' '
        alphabet++
    }
    console.log(line)
}

