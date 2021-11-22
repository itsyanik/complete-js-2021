# Function Declarations vs Expressions
The functions seen in the last lecture are called function declarations because we simply call the `function` keyword to define a function a bit like we declare a variable.

```javaScript
// declaration
function calcAge1 (birthYear) {
  const age = 2037 - birthYear;

  return age;
}

const age1 = calcAge1(1991);

// expression (also an anonymous function as it has no name)
const calcAge2 = function (birthYear) {
  const age = 2037 - birthYear;

  return age;
}

const age2 = calcAge2(1991);

console.log(age1, age2); // 46 46
```

## So What is the difference?
Well, a declaration can be called in the code before it has been defined however the same is not true for the expression. This happens because of something called variable hoisting that we will study later.

## Which should I use?
It's really a matter of personal preference.