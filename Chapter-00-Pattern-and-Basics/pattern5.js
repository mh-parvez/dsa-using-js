
// A B C D 
// B C D E 
// C D E F
// D E F G

let alphabet = 65, n = 5

for (let i = 1; i < n; i++) {

    let temp = alphabet + i - 1
    let line = ''
    for (let j = 1; j < n; j++){
        let alpha = String.fromCharCode(temp)
        line += alpha + ' '
        temp++
    }
    console.log(line)
}

