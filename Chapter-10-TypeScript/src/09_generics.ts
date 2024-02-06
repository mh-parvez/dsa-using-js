function printSomthing<Type>(value: Type): Type {
  return value;
}

const num = printSomthing<number>(34);
const bool = printSomthing<boolean>(true);
console.log(num);
console.log(bool);


function add<Type1, Type2>(a: Type1, b: Type2): void {
  console.log(a);
  console.log(b);
}

add<number, number>(20, 30);
