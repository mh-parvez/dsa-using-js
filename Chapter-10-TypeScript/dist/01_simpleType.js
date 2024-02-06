"use strict";
// todo: boolean, number, string, bigint, symbol, any
const age = 7;
function isVoter(inputAge) {
    return inputAge >= 18;
}
if (isVoter(age)) {
    console.log("Voter");
}
else {
    console.log("teenager");
}
const userName = "Kbair";
console.log(userName.length);
