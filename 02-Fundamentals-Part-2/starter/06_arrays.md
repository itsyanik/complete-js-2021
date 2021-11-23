# Arrays
This is gonna be the first data structure that we will learn. Let's say we want to make a list of friends. The way we would do as of now with the knowledge given through the course would be by manually creating a variable for every element of it. With arrays we can bundle all the values into a bigger container. The most important data structures in JS are Arrays and Objects (which we'll see soon).

```javascript
// Arrays use the [] syntax.
// Values in arrays must be separated by commas;
 const friends  = ["Michael", "Steven", "Peter"];

 // alternative - unusual
 const years = new Array(1991, 1995, 1997);
 ```

 It is very common for us to need to access the elements inside of it. To do it, we can access them with the `array[index]` sintax, like the following: `friends[0]`. Array are zero based-indices so to access the first element you must use `0`.

 You can also use the `.length` property of an array to find out how many elements it has inside of it. But we'll talk more about this when studying objects. The one thing to keep in mind about this is that it is not zero based, so in this case it would log `3` instead of `2`.
 This is very useful for accessing the last element of the array like `friends[friends.length - 1]`. Any expression that evaluates to one of the array indices will work!

 You can also replace array elements by using the brackets sintax. Let's say you want to replace Steven in the array above (which is at index 1). You can just write `friends[1] = 'Jay';` to manually replace the value.

 If you noticed, in here we declared the friends array with `const` and were still able to change the values inside of it. This happens because only primitive values are immutable. What you cannot do is reassing the whole array in one liner.

 Arrays can also hold different types of values at the same time. `const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends]`. It even accepts an array inside another array!