import { users } from "./data.js";
// let maleUsers = users.filter((maleUser) => maleUser.gender === "male");

const maleUsers = users.map((maleUser) => {
  return `${maleUser.name.first} ${maleUser.name.last} is ${maleUser.dob.age}`;
});

console.log(maleUsers);
