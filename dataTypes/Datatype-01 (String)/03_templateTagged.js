

function modifier(strings, ...values) {

    // console.log(strings)
    // console.log(values)

    const modi = strings.reduce((pre, curr) => {

        // console.log(pre)
        // console.log(curr)
        return pre + curr + (values.length ? "Mr. " + values.shift() : "")
    }, "")

    return modi;
}

let player1 = "sakib"
let player2 = "tamim"
console.log(modifier`we have ${player1} and ${player2} in our team`)



