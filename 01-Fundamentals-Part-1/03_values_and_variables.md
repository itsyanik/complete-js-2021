# Values
A value is basically a piece of data. We can simply write `"Hello"` or `23` and that is considered a value. One of the most fundamental things we do with values is store them into *variables* and this way we make them reusable.

```javascript
// Assign a value to a variable.
// This is known as declaring a variable.
let firstName = "Jonas";
```

## Box Analogy
A box can hold many things inside it, for example a book. And then we can use a label to describe what's in it. Then later we can use that same label to look for the box with the contents of what we are looking for. And variables work just like that.

In the example above, we have a box called (labeled) `firstName`. In that box, the value of `"Jonas"` is stored. So now if we want to use that value, all we have to do is use the boxe's label (`firstName`). So if we `console.log(firstName)` we'll get the value of `"Jonas"`.

## Easy to maintain
Assinging a value to a variable makes your code a lot easier to maintain in case there is a change to a value because all you have to do is change the value assigned, and then whenever the variable shows up it will have the value updated.

## Naming conventions
There are a few conventions regarding variable names, they are `camelCase` and `underscore`. In camelCase, the first word of the variable will be all lowercase and then the second word of the variable will have it's first letter capitalized (like we did with `firstName`). In underscore, all the words are written in lowercase and separated by an underscore (`first_name`). The underscore is very popular in other languages but in JavaScript it's kind of conventional to write all the variables with camelCase.

## Rules
There are some rules to how we can name our variables in JavaScript.

- Your variables cannot start with a number (`let 3years = 365 * 3` is an invalid code);
  - If you try to load this code, you'll get a warning of `SyntaxError`.
  - Keep an eye out for those ase they help you debug your code and understand how to fix your code.
- Your variables can only contain: letters, numbers, underscores and $.
  - So trying to write `let jonas&Matilda = "J&M"` is INVALID.
- You cannot name your variable using a reserved JavaScript keyword.
  - Writing `let new = 27` is invalid because the word new is reserved.
  - If really needed to use a reserved keyword, you can start your variable name with an `_` or `$` (like `$new or _new`).
- One word that is kind of reserved but allowed to use is `name`. In some cases it can cause some trouble, so it's best to be avoided.
- You should NOT start your variable name with an uppercase letter.
  - This is just a convention and not really a rule, so JavaScript will not stop you.
  - It's conventionend for naming `Classes` in JavaScript.
- Variables that we know will never have it's value changed should be written in all uppercase.
  - For example, `const PI = 3.1415;`
  - This is kind of a convention for programming languages as a whole.
- Your variable should be very descriptive
  - This makes your code easier to read and understand.
  - It does not matter if your variable has a long name.