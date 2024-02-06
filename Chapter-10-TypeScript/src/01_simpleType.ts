// todo: boolean, number, string, bigint, symbol, any

const age: number = 7;

function isVoter(inputAge: number): boolean {
  return inputAge >= 18;
}

if (isVoter(age)) {
  console.log("Voter");
} else {
  console.log("teenager");
}

const userName: string = "Kbair";
console.log(userName.length);
