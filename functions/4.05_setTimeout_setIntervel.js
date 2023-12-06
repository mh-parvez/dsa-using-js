

//todo: setTimeout
{
    // function sayHi() { console.log("hello") }
    // setTimeout(sayHi(), 1000);     // wrong!

    // let timerId = setTimeout(() => console.log("after an second"), 1000);
    // console.log(timerId); // timer identifier

    // clearTimeout(timerId);
    // console.log(timerId); // same identifier (doesn't become null after canceling)
}

//todo: setIntervel
{
    // repeat with the interval of 2 seconds
    // let timerId = setInterval(() => console.log('tick'), 2000);
    // console.log(timerId)

    // after 5 seconds stop
    // setTimeout(() => {
    // clearInterval(timerId);
    // console.log('stop');
    // }, 5000);    
}

//todo: nested setTimeout
{
    let timerId = setTimeout(function tick() {
        console.log('tick');
        timerId = setTimeout(tick, 2000); // (*)
    }, 2000);
}

`
let delay = 5000;
let timerId = setTimeout(function request() {
    // ...send request...
    if (request failed due to server overload) {
        // increase the interval to the next run
        delay *= 2;
    }
    timerId = setTimeout(request, delay);
}, delay);
`

let i = 1;
setTimeout(function run() {
    func(i++);
    setTimeout(run, 100);
}, 100);


