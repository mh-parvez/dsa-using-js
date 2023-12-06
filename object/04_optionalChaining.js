
//todo: optional chaining
/**
 * The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
 * If you’ve just started to read the tutorial and learn JavaScript, maybe the problem hasn’t touched you yet, but it’s quite common.
 * As an example, let’s say we have user objects that hold the information about our users.
 * Most of our users have addresses in user.address property, with the street user.address.street, but some did not provide them.
 * In such case, when we attempt to get user.address.street, and the user happens to be without an address, we get an error:
*/

var user = {}; // a user without "address" property
alert(user.address.street); // Error!

// document.querySelector('.elem') is null if there's no element
var html = document.querySelector('.elem').innerHTML; // error if it's null

var user = {}; // user has no address
alert( user?.address?.street ); // undefined (no error)

var html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no elemen

let user = null;
alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

// note: A chain of ?. allows to safely access nested properties.
// note: Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.

















