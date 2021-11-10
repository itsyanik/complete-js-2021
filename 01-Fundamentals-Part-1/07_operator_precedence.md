# Operator Precedence
In JavaScript all the operators have an order in which they're executed, this is called operator precedence.
If you want to check the full list, you can check [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)'s table.

This is very important when organizing your code and making a bunch of operations at the same time, but you don't need to have everything memorized just keep in mind the general idea.

Usually all the math operators are executed before the comparision operators, this is why the code from the last lesson works.
```javascript
console.log(currentYear - 1991 > currentYear - 2018) // true
```

