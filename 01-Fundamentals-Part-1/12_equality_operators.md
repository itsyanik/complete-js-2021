# Equality Operators
When we want to check if a value is equal to another instead of using greater or lesser than, we can use equality operators. There are four equality operators: `===` (strictly equal), `==` (loosely equal), `!==` (NOT strictly equal), `!=` (NOT loosely equal).

## (NOT) Stricly Equal
The strictly equal operator is called strict because it does not do type coercion when checking for a value. It checks for equality in both value and type.

```javascript
const age = 18;

if (age === 18) { // true
  console.log("You just became and adult!");
}
```

## (NOT) Loosely Equal
On the other hand, the loosely equal operator does perform type coercion when checking for a value.

```javascript
const age = '18';

if (age == 18) { // true
  console.log("You just became and adult!");
}
```

The loose equal operator is full of weird rules that can introduce many bugs into our code so it's best to be avoided.