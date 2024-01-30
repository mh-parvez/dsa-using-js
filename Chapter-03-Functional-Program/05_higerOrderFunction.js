// যেসব ফাংশন অন্য ফাংশর এর উপর কাজ করে থাকে । When a  function use as a parameter / reutun or both it's called higher order function.

var cars = ["🚗", "🚓", "🚕", "🚙"];

//example, without higher order funciton
var serialNo = [];
let serial = Math.floor(Math.random() * 999999);

for (let i = 0; i < cars.length; i++) {
  serialNo.push(`${cars[i]} : ${serial}`);
}
console.log(serialNo);

//with higher order funciton
var carNumerPlate = cars.map((car) => `${car} : ${serial}`);
console.log(carNumerPlate);
