"use strict";
const isPalindrom = (str) => {
    const temp = str.split("").reverse().join("");
    return temp === str;
};
isPalindrom("12321") && console.log("yes");
//default parameter
const sum = (num1 = 0, num2 = 0) => {
    return num1 + num2;
};
console.log(sum(10, 20));
//optional argument
const power = (num = 0, pow) => {
    if (pow) {
        return num ** pow;
    }
    else {
        return num ** 2;
    }
};
console.log(power(2, 3));
console.log(power(2));
