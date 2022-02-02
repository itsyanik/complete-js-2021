# Numeric Separators

Starting in ES2021 we can use a new feature to separate numbers in a format that is easier for us to write and other developers to use and uderstand.
Imagine we want to represent a really big number, like the diameter of our solar system, which would be 287460000000. That is too many zeroes.
In english, they use the comma to separate the units, turning it into 287,460,000,000 which then makes it a lot easier to read and understand.
Now, we can separate numbers with an underscore which will make them a lot easier to read. `287_460_000_000`. Javascript will ignore the underscores and unerstand the number.
The underscore can only be inserted between numbers, meaning you cannot use it at the start or the end of a number, or in a floating point number at the point.
It does not work when converting a numerical string that has underscores to a number.
