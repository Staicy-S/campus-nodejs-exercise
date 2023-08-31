import { users } from "./data.js";
// console.log(
//   `${users[0].name.title} ${users[0].name.first} ${users[0].name.last} is from ${users[0].location.country}`
// );

// users.map((user) =>
//   console.log(
//     `${user.name.title} ${user.name.first} ${user.name.last} is from ${user.location.country}`
//   )
// );

// Die Funktion könnte man easy-peasy noch an einer anderen Stelle aufrufen
// function transformUser(user) {
//   return `${user.name.title} ${user.name.first} ${user.name.last} is from ${user.location.country}`;
// }
// const result = users.map(transformUser);

// Bei der Arrow Schreibweise wird sie nur an Ort und Stelle verwendet
const result = users.map((user) => {
  return `${user.name.title} ${user.name.first} ${user.name.last} is from ${user.location.country}`;
});

// Kürzeste Schreibweise, nur bei einfachen Fällen
const resultShort = users.map(
  (user) =>
    `${user.name.title} ${user.name.first} ${user.name.last} is from ${user.location.country}`
);
console.log(result);
console.log(resultShort);
