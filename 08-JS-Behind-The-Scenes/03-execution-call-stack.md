# How is JavaScript executed?

After the compilation, when our code is ready to be executed what happens is the creation of **Global Execution Context** (for top-level code, ie: not inside any function).

## Execution Context

This is an environment in which a piece of JavaScript is executed.It stores all the information necessary for a code to be executed (eg: local variables, function arguments). In any JavaScript project, no matter how large there is only ONE global execution context and it's where top-level code will be executed. Once the top-level code gets executed, then it's finally time for functions to be executed as well.

Every functions will have it's own execution context containing all the information necessary to run that function and the same goes for methods as they are only functions inside of an object. All of this execution context makes up the Call Stack mentioned before.

When all of the functions are done executing, the Engine will basically keep waiting for new callback functions to arrive. Remember that the Event Loop is the one prividing these callback functions.

## What is inside of the Execution Context?

Inside of any Execution Context there is the Variable Environment, where all the variable declarations and functions are stored alongside an _arguments object_. This object contains all the arguments that are passed into the function that the currenct execution context belongs to. Remember: every function gets its own Execution Contexts as soon as they're called. This makes it so that every variable that is declared within the function ends up in it's Variable Environment.

A function can also access variables that are outside of the function and this happens because of something called the Scope Chain, which we will look at later. For now just know that it contains references to the variables that are located outside of the function and to keep track of the Scope Chain, it is stored in each Execution Context.

Finally, each Execution Context also gets a special variable called the _this_ keyword (also later on).

One important note here is that arrow functions **do not** get their own arguments object nor the _this_ keyword. Instead, they can use they arguments object ant the _this_ keyword from their closest regular function parent.

So the Execution Context is generated during the "creation phase", right before the execution. This is all that is needed to run the code at the top-level. It's a bit more complicated in behind the scenes, but this should do it.

## The Call Stack

The Call Stack is where the context gets stacked on top of each other to keep track of where we are in the execution and this is how the Enigine knows the order in which to run the functions.
The Execution Context that is at the top is the one that is currently running and once it is done it will be removed from the current Stack and the execution will go back to the previous Context. The final code that stays on the Global Context is only really popped off once we close the tab or shutdown the browser. Until then, it keeps living in the memory.
