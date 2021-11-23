# Array methods
JS has some builtin functions that we can apply directly on arrays and these are called methods.
Think of methods like array operations.

## Push
The `push` method adds elements to the end of an array. `array.push(newElement)`.
Thinking about the previous example: `friends.push("Daniel")` will insert a new name to the friends array that was created. The `push` method also has a return that is the lenght of the new array.

## Unshift
It works like the `push` method, but instead of adding elements to the end of the array, it adds a new element to the beggining of the array `array.unshift(newElement)`. It also returns the new length of the array.

## Pop
This method is basically the oposing method of `push` as it removes an element from the end of an array. But unlike the `push` method, this one does not need an argument to be passed into it as it will remove the last element, regardless of what is it's content. `array.pop()`. Unlike the other methods, this one returns the element that was removed from the array.

## Shift
Just like `pop` is the oposing method to `push`, `shift` is the opposing method to `unshift`. It will remove the first elemet of the array. Just like `pop` it takes no arguments and returns the removed element. `array.shift()`.

## IndexOf
Unlike the other methods, `indexOf` will return the position of an element in an array. For this method, you actually need to know what is inside the array when passing the argument. If you pass an argument with a value that is not present in the array, it will return `-1`.
`array.indexOf(element)`.

## Includes
This method was added in ES6 and it works similarly to the `indexOf` method. This method simply returns `true or false` for checking if the element exists in the array. `array.includes(element)`. This method uses strict equality for making this check.