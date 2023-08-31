import { users } from "./data.js";
// let maleUsers = users.filter((maleUser) => maleUser.gender === "male");

// const maleUsers = users.filter((maleUser) => {
//   return `${maleUser.name.first} ${maleUser.name.last} is ${maleUser.dob.age}`;
// });

// Die Zeile filtert
//const maleUsers = users.filter((maleUser) => maleUser.gender === "male");

//console.log(maleUsers);

function maleUserAndAge(maleUser) {
  const maleUsers = users.filter((maleUser) => maleUser.gender === "male");
  return `${maleUser.name.first} ${maleUser.name.last} is ${maleUser.dob.age}`;
}

console.log(maleUserAndAge(users));
