
// A 
// B B 
// C C C
// D D D D
// E E E E E

let alphabet = 'A'.charCodeAt(0)
let n = 4

for(let i = 0; i <= n; i++){
    let line = ''
    for(let j = 0; j <= i; j++){
        temp = String.fromCharCode(alphabet)
        line+= temp + " "
    }
    console.log(line)
    alphabet++
}




