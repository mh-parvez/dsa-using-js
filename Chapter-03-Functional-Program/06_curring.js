function discount(disc) {
  return (price) => {
    return price - price * disc;
  };
}

let tenParcentDiscout = discount(0.1);
let twintyParcentDiscout = discount(0.2);

let customer1 = tenParcentDiscout(600);
let customer2 = tenParcentDiscout(900);

let customer3 = tenParcentDiscout(1200);

console.log(customer1);
console.log(customer2);
console.log(customer3);
