// . . . . .  
// . . . .  * 
// . . .  * *
// . .  * * *
// .  * * * *

let n = 5

for(let i = 0; i < n; i++){

    let space = ''
    for(let s = 0; s < n - i; s++){
        space+= '. '
    }

    let line = ''
    for(let p = 0; p < i; p++){
        line+= '* '
    }
    console.log(space, line)
}

