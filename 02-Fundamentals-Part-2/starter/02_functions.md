# Functions
A function is simply a piece of code that we can use over and over again in our code. It's like a variable but for a whole chunk of code.

Remember: a variable holds a value, but a function can hold one or more complete line of code.

```javascript
function logger () {
  // function body
  console.log('My name is...');
}

// calling / invoking / running the function
// it can be called as many times as you want / need
logger();
```

But functions can be much more than just that. Usually when writing functions we pass data to it as well and aditionally functions can also return data. This means we can use that data from the function later on on our program.

# Machine Analogy
Think of functions just like a food proccessor. It recieves food, that is like passing data to the function. Then it proccesses the food, that is like the body of the function where it does something to our code. And lastly it gives us the proccessed food (for example an orange juice), and that is like the data returned from the function.

```javascript
/* 
  In functions we also specify something called parameters.
  Parameters are like variables that are only specific to this function.
  They get defined once we call the function.
*/
function fruitProccessor(apples, oranges) {
   console.log(apples, oranges);
   // apples and oranges will be called as numbers
   const juice = `juice with ${apples} apples and ${oranges} oranges`;

   return juice;
}

// called the function with arguments 5 and 0
const appleJuice = fruitProccessor(5, 0); // stored the value returned from the function
console.log(appleJuice) // juice with 5 apples and 0 oranges

/* 
  Now we can call the function again with different arguments
  to create different return values for us to use during our program
*/

const appleOrangeJuice = fruitProccessor(2, 4);
console.log(appleOrangeJuice) // juice with 2 apples and 4 oranges
```

Functions allows us to write more maintanable code! :)
With functions we can create reusable chunks of code instead of having to manually rewrite the same piece of code over and over again. This is a very important principle for writing clean code called Don't Repeat Yourself (DRY). 
Keep your code DRY!