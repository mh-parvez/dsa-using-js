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
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// 🔰 String Enums
enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

enum Roles {
  admin = "admin",
  user = "user",
}

type LoginDetalis = {
  userName: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: LoginDetalis = {
  userName: "Jaman",
  email: "jam123@gmail.com",
  password: "43j345",
  role: Roles.admin,
};

const user2: LoginDetalis = {
  userName: "Papi",
  email: "pa374@gmail.com",
  password: "4484",
  role: Roles.user,
};

const isAdmin = (user: LoginDetalis): string => {
  const { userName, email, role } = user;
  return role === "admin" ? `${email} is admin` : `${email} is user`;
};
console.log(isAdmin(user2));
