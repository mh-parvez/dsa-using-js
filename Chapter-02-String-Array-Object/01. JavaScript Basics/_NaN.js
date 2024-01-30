const result = "parvez" / 5;
console.log(result); //NaN

//note: js always try to type custing, here expected output a number, but its no possible, that's way js return NaN

const werid = NaN;
console.log(werid === werid); // false 🤪

//note: itself false, js behind the sence logic 👇🏻

const result1 = "ab" / 2;
const result2 = "xy" / 5;

result1; // NaN
result2; // NaN

console.log(result1 === result2); // false, those variable are not the same, thats way "NaN" === "NaN"  output: false

const array = [NaN];
const checking = array.includes(NaN);
console.log(checking); //true 🙈 but why??

//note: here js follow sameValueZero Algorithm

function sameValueZero(a, b) {
  if (a === b || (Number.isNaN(a) && Number.isNaN(b))) {
    return true;
  }
  return false;
}
