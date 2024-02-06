const isPalindrom = (str: string): boolean => {
  const temp = str.split("").reverse().join("");
  return temp === str;
};

isPalindrom("12321") && console.log("yes");

//default parameter
const sum = (num1: number = 0, num2: number = 0): number => {
  return num1 + num2;
};
console.log(sum(10, 20));

//optional argument
const power = (num: number = 0, pow?: number): number => {
  if (pow) {
    return num ** pow;
  } else {
    return num ** 2;
  }
};
console.log(power(2, 3));
console.log(power(2));
