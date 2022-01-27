# forEach

The `forEach` method works just like the `for... of` loop, but they're fundamentally different. The `forEach` method is essentially a higher order function that requires a callback function in order to tell it what to do. So it is the method that calls the callback function.

It will loop through the array and in each iteration it will call the callback function. As it does that, it will recieve the current element of the array as the first argument. If you need to access the index during the loop, just specify the second argument. The third argument is the array itself.

The fundamental difference between `forEach` and `for... of` loop is that you **cannot** breakout of a forEach loop. This means that `continue, break` statements do not work at all.
