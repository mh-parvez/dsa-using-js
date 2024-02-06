"use strict";
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
// 🔰 Numeric Enums - Initialized
// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West,
// }
// // logs 1
// console.log(CardinalDirections.North);
// // logs 4
// console.log(CardinalDirections.West);
// 🔰 Numeric Enums - Fully Initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// 🔰 String Enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
const user1 = {
    userName: "Jaman",
    email: "jam123@gmail.com",
    password: "43j345",
    role: Roles.admin,
};
const user2 = {
    userName: "Papi",
    email: "pa374@gmail.com",
    password: "4484",
    role: Roles.user,
};
const isAdmin = (user) => {
    const { userName, email, role } = user;
    return role === "admin" ? `${email} is admin` : `${email} is user`;
};
console.log(isAdmin(user2));
