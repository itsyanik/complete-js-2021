# Data Types
In every programming language variables can have different types depending on the type of data that we want them to hold.

## Value
Every value in JavaScript is either an object or a primitive value.

```javascript
// primitive
const firstName = "Jonas";
const age = 30;

// object
const jonas = {
  firstName: "Jonas",
  age: 30
}
```

A value is only primitive when it's not an object. We'll learn about objects later, but for now lets focus on primitive data types.

## The Seven Primitive Data Types

1. **Number**. They're floating point numbers, used for decimals and integers.
    - They always have floating point even if we don't see or define them.
    - This means that `23` is actually `23.0`
    - In other programming languages it's common to find different number types for integers and decimals
2. **String**. They're a sequence of characters and it's always used for text. 
    - *eg* `"Jonas"`
    - Must always be between quotes, either single or double
3. **Boolean**. Logical type that can only be `true or false`
    - They're used for taking decidions whithin the code
4. **Undefined**. Is the value taken by a variable that is not YET defined (an empty value)
    - *eg* `let firstName;`
5. **Null**. It also means an empty value but used in different circumstances. For now just knows that it exists.
6. **Symbol**. Introduced in ES2015 (ES6). It defines a value that is unique and cannot be changed. For now it's not useful for us.
7. **BigInt**. Introduced in ES2020 it defines integers larger than the `Number` type can hold.

# Dynamic typing
JavaScript has a feature called dynamic typing. This means that you do not have to define the type of the value that you are assinging to the variable because JavaScript will do that automatically for you.
**The value has a type and not the variable**. Variables simply store the values that have a type.

This means that we can declare a variable with an initial value of the type number and then reassing it with a value that is the type string, for example.

```javascript
let age = 30;
age = "thirty";
```

If you ever want to check the type of one value, you can use the `typeof` command.

```javascript
let age = 30;
console.log(typeof age) // number
age = "thirty";
console.log(typeof age) // string
```

Be aware that there is a bug in the `typeof` function and it will return `object` if you try to log for `null`. Due to legacy reasons it is never fixed.