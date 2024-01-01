
// A 
// B C       
// C D E     
// D E F G   
// E F G H I

let alphabet = 'A'.charCodeAt(0)
let n = 5;

for (let i = 0; i < n; i++) {
    let line = ''
    let counter =  0
    for (let j = 0; j <= i; j++) {
        let temp = String.fromCharCode(alphabet + counter)
        line += temp + ' '
        counter++
    }
    alphabet++
    console.log(line)
}


