import { users } from "./data.js";

let femaleUsers = users.filter((femaleUser) => femaleUser.gender === "female");
// let femaleUsers = users.filter((users.gender) => { return users.gender === "female" });

console.log(femaleUsers);
