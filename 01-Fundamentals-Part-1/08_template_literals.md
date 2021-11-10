# Template Literals
Strings are a very important part of every programming language. We have worked with strings before and concatenate them by using the `+` operator, however there is a better way to write long strings that interact with many variables at the same time, avoiding the `... + ' ' + ...` hassle.

```javascript
const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const currentYear = 2037;

console.log(`I'm ${firstName}, a ${(birthYear - currentYear)} ${job}!`);
```

You can use the backtick ` `` ` character to create dynamic strings like that! All the spaces can be just written as plain spaces. And for any variable you need to insert into your string all you have to do is write it between `${variable}`.