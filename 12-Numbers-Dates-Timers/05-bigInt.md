# BigInt

BigInt is a special type of number that was introduced in ES2020.
As we know, numbers are represented internally using 64 bits, this means that there are 64 ones or zeroes to represent any given number. But out of those, only 63 are used to store the digits themselves. The rest is used to store the decimal position and the sign. This means that there is a limitation on the numbers that can be represented with JavaScript (2 \*\* 53 - 1). It can be accessed with `Number.MAX_SAFE_INTEGER`.

This can become a problem, when for example working with databases ids or when interacting with real 64 bit numbers, which are actually used in other languages. If we get a number any bigger than that from an API we cannot store it in JavaScript. Until BigInt came in.

BigInt can be used to store numbers as big as we want! All you have to do is add an _n_ to the end of your big number. `68798465138798794615666666761n`, or using `BigInt(68798465138798794615666666761)`.
Sometimes the numbers might differ from one function to the other. This could be because JavaScript needs to figure out a way to represent this number internally before it can be transformed into a BigInt.

BigInts **cannot** be mixed with regular numbers. The exception to this is logical operators and the equality operators.
Functions from the `Math` object also do not work with BigInt.
