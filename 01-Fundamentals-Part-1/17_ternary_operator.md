# Ternary Operator
We already know the `if / else` and `switch` operators, but we're still missing one: the ternary operator (also called the conditional operator). 

```javascript
const age = 18;

age >= 18 ? console.log('I like drinking wine') : console.log('I like to drink soda');
```

The `?` operator works basically like an `if / else` block but in one line. Whatever is before the `:` will be executed when `true`, and whatever is after is returned if `false`. The `else` part of the block is MANDATORY.
This is very useful for creating conditional variables.

```javascript
const drink = age >= 18 ? 'Wine' : 'Soda';

console.log(drink) // wine;

// The above code is a lot easier to write and understand than
let drink2;
if (age >= 18) {
  drink2 = 'Wine';
} else {
  drink2 = 'Soda';
}
```

Unlike the `if / else` statements, ternary operators can be put inside template literals!!
```javascript
console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Soda'}.`);
```