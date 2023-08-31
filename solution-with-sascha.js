import { users } from "./data.js";

// 1.
// const result = users.map((user) => {
//   return (
//     user.name.first + " " + user.name.last + " is from " + user.location.country
//   );
// });
// const result = users.map(
//     (user) =>
//       user.name.first + " " + user.name.last + " is from " + user.location.country
//   );

//console.log(result);

// 2.
// const result = users.filter((user) => user.gender === "female");
// console.log(result);
// andere Schreibweise
// const result = users.filter((user) => {
//   return user.gender === "female";
// });
// console.log(result);

// 3.
// const result = users
//   .filter((user) => user.gender === "male")
//   .map((user) => {
//     return user.name.first + " is " + user.dob.age + " years old.";
//   });
// console.log(result);
// Andere Lösung mit Zwischenschritten
// const result = users
//   .filter((user) => user.gender === "male")
//   .map((user) => user.name.first + " is " + user.dob.age + " years old.");

// const onlyMaleUsers = users.filter((user) => user.gender === "male");

// const usersAsText = onlyMaleUsers.map(
//   (user) => user.name.first + " is " + user.dob.age + " years old."
// );
// console.log(usersAsText);

// 4. Sort
// Strings werden alphabetisch sortiert, Nummern werden nach der Größe sortiert
const myNumbers = [5, 3, 8, 2, 9, 1];
// myNumbers.sort();
// console.log(myNumbers);

// function compareFn(a, b) {
//   return a < b ? -1 : 1;
// }
// myNumbers.sort(compareFn);

// myNumbers.sort(function (a, b) {
//   return a < b ? 1 : -1;
// });

// console.log(myNumbers);

// Jetzt mit dem users Array:
// const debugUsers = users.filter((user) => user.dob.age < 30);
// console.log(debugUsers);

// Noch ein Beispiel
const myUsers = users.map((user) => {
  return { name: user.name.first, age: user.dob.age };
});

myUsers.sort((a, b) => {
  if (a.age < b.age) {
    return -1;
  } else {
    return 1;
  }
  return;
});
console.log(myUsers);
