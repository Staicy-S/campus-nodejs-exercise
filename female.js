import { users } from "./data.js";

// First option (Variante 1b)
// let femaleUsers1 = users.filter(function (femaleUser) {
//   const femalesOnly = femaleUser.gender === "female";
//   return femalesOnly;
// });
// console.log(femaleUsers1);

// Second option (Variante 4)
// let femaleUsers2 = users.filter((femaleUser) => femaleUser.gender === "female");
// console.log(femaleUsers2);

// Third option
// let femaleUsers3 = users.filter((femaleUser) => {
//   return femaleUser.gender === "female";
// });
// console.log(femaleUsers3);

// Fourth option
// function sortFemaleUsersFunction(femaleUser) {
//   const femalesOnly = femaleUser.gender === "female";
//   console.log(femalesOnly);
//   return femalesOnly;
// }

// const femaleUsers4 = users.filter(sortFemaleUsersFunction); // da nicht den Parameter mitgeben!!
// console.log(femaleUsers4);
