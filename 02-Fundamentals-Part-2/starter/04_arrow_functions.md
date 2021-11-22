# Arrow Functions
In ES6, a new type of function has been added to the JS language: the arrow functions.
An arrow function is simply another form of writing a function expression that is shorter and faster to read.

```javaScript
const calcAge = birthYear => 2037 - birthYear;

const age = calcAge(1991);

console.log(age); // 46
```

Note that the returns happens implicitly in the arrow functions, without the need for the curly bracers! However for functions that are note one-liners you'll still need to provide the curly bracers.

```javaScript
const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return retirement;
}

console.log(yearsUntilRetirement(1991)) // 19
```

When you need more than one parameter in the arrow function you can just encapsulate the parameters in parenthesis.


```javaScript
const yearsUntilRetirement = (name, birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${name} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement('Jonas',1991)) // Jonas retires in 19 years
```