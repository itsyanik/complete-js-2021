# Short Circuiting (&& and ||)

So far we have only used the `&&` and `||` operators to combine boolean values, but we can use them to acoomplish much more.

They can use and return ANY data type. And they can be used for short-circuit validation.

## The OR operator

`console.log(3 || 'Jonas') // 3`

For this operation we're using two non-boolean values and the return is also a non-boolean value. In the case of the `||` operator it means that if the first value is truthy, then it will immiediately return that value.

```javaScript
// reference object from script.js
// ternary
const guests1 = restaurant.guests ? restaurant.guests : 10;

// short circuit ver
const guests2 = restaurant.guests || 10;
```

One important thing to notice is that if the `restaurant.guests` is actually zero, short-circuiting will not work and will return the value of 10, which is unwanted. But we'll explore a great solution for this problem on the next lecture.

## The AND operator

When talking about short-circuiting the way `&&` works is exactly opposed to the `||`. This means that it will return the first falsy value in an evaluation.
If all the values are truhty, then it will simply return the last value in the evaluation.
