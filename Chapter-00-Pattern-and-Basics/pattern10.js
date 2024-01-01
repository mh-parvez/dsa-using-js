
//      1 
//    1 2 1
//  1 2 3 1 2
// 1 2 3 4 1 2 3

let n = 5

for(let i = 0; i < n; i++){

    let space = ''
    for(let s = 0; s < n - i; s++){
        space += '  '
    }

    let p1 = ''
    for(let m = 1; m <= i; m++){
        p1 += m + ' '
    }

    let p2 = ''
    for(let n = 1; n < i; n++){
        p2 += n + ' '
    }
    console.log(space, p1 + p2)
}

