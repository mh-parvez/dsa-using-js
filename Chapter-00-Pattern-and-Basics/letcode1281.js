/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num = n
    let product = 1, sum = 0, result = 0

    while(num) {
        let lastdigit = num % 10
        product *= lastdigit
        sum += lastdigit
        num = Math.floor(num / 10)
    }
    result = product - sum 
    return result
};

console.log(subtractProductAndSum(234))
