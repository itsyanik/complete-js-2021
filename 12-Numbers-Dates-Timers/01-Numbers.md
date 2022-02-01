# Numbers

Numbers in JavaScript are represented using binary (base 2), unlike the base 10 we are used to. This means that some calculations with decimal point numbers are not gonna be precise and if you need financial calculations and such, you should probably use another language.

```javascript
0.1 + 0.2 === 0.3; // false
0.1 + 0 + 2; // 0.300000000000000000004
```

## Parsing

The `Number` object that we have access in JavaScript has some built-in methods that we can use to parse numbers to Float or Integer. You can use the `Number.parseInt('30px', 10)` to convert a value that **starts** with a number and has some texto after to a simple number and even specify the base in which you want the number to be (second argument, called Redix).

If you need Floating point numbers you can also use `Number.parseFloat('30')`.
