// null is special type use as an absense of objects.
// undefined, means no define value.
// NaN means not a numebr.

var userName;
var nullValue = null;
var nanValue = "A" * 2;

function cheaker(mainValue, compareWith) {
  for (let i = 0; i < compareWith.length; i++) {
    console.log(
      mainValue + " == " + compareWith[i] + " ->",
      mainValue == compareWith[i]
    );
    // console.log(mainValue + ' === ' + compareWith[i] + ' ->', mainValue === compareWith[i])
  }
  console.log("\n");
}

let compareWith = [undefined, null, 0, NaN, false, true, ""];

cheaker(undefined, compareWith);
cheaker(null, compareWith);
cheaker(NaN, compareWith);
