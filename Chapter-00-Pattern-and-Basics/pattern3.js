// * 
// * *
// * * *
// * * * *

// 1 
// 1 2
// 1 2 3
// 1 2 3 4

// 1 
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let i = 1, n = 5

while( i <= n){
    let line = ''
    for(let j = 1; j <= i; j++){
        // line += '* '
        // line += j + ' '
        line += i + ' '
    }
    console.log(line)
    i++
}

