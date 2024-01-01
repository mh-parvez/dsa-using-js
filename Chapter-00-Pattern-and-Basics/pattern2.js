//todo: 02
// 01 02 03 04 05
// 06 07 08 09 10
// 11 12 13 14 15 
// 16 17 18 19 20

let counter = 1;
let n = 5

for( let i = 1; i <= n; i++) {
    
    let line = ''
    for(let j = 1; j <= n; j++){
        if(counter < 10){
            counter = '0' + counter
        }
        line = line + counter + ' '
        counter++
    }
    console.log(line)
}

