/* 
  Using what we have learned from the object lessons,
  and the given object, make the following string dynamic:

  "Jonas has 3 friends, and his best friend is called Michael."
*/

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"]
};

const dynamicString =
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`;

console.log(dynamicString);