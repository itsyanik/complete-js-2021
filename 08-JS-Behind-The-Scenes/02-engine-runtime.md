# What is a JavaScript Engine?

The Engine is simply program that executes JavaScript code. There is a lot more to it, but for now this is what we need to know. Every browser has it's own JS Engine, but the most well-known is Google's V8, which runs Google Chrome and also NodeJS (the one we can use to create server-side applications).

## How does it work?

Every Engine has a Call Stack and a Heap. The Call Stack is where the code is executed using something called Execution Context. The Heap is an unstructured memory where all the objects that our application needs are stored.

## How is JS converted to machine code?

As a piece of JavaScript enters the Engine the first step is to parse (read) the code. During the parsing proccess the code is parsed to a structure called **Abstract Syntax Tree (AST)**. This works by splitting each line of code into pieces that are meaningful to the language like the **const** or **function** keywords and then saving all this information inside the tree in a structured way. This step also checks if there are any syntax errors. The resulting tree will later be used to generate the machine code.

The next step is the compilation, where the generated AST gets compiled into machine code. This machine code then gets executed right away. The execution happens in the Call Stack!

Modern JavaScript engines have some pretty clever optimization strategies, like creating an unoptimized machine code in the beggining just so it can start executing as fast as possible, then in the background this program is being optimized and recompiled during already running program execution and this can be done multiple times. After each optimization the unoptmized code is swept for the new and more optimized code without ever stopping the execution. This is what makes modern engines such as V8 so fast!

All of this optimization happens from inside special threads which we cannot access from inside our code, completly separate from the Call Stack that is running our own code.

## Compilation vs. Interpretation

In the past lectures, we learned that computers only understand zoroes and ones, so fundamentally every program needs to be converted to this machine code (binary). This proccess can happen in two ways: interpretation or compilation.

**Compilation** is when all the source code is converted to machine code at once and then it is written into a portable file that can be executed on any computer. This makes it a two step proccess, the first being the machine code being built and then it being executed. The execution can happen way after the compilation.

**Interpretation** is when the source code is read line-by-line by the interpreter as it is executed. This proccess is a one step only, as the code is executed as it's being read. The code is still converted to machine code, but this happens right before it is executed and not ahead of time.

JavaScript used to be interpreted only but the problem is that this tends to be very slow, and with JavaScript getting bigger and bigger and being used to build entire applications this became unnaceptable. Nowadays modern JavaScript uses a mix between interpretation and compilation, which is called **Just In Time (JIT)** compilation. This approach basically compiles the entire code to machine code at once and then executes it right away.
With this, we still have the two step process but there is no file to execute the code and the execution happens immediatly after the compilation.

## JavaScript runtime

Imagine a big box container that includes all the things that we need to use JavaScript (like the browser). In the heart of a JavaScript runtime there is always the Engine. Without an Engine, there is no runtime and no JavaScript. However, the engine alone is not enough. In order to work proper, we also need the Web APIs (basically functionalities provided to the Engine). Next, a JavaScript runtime also contains something called Callback Queue which contains all the callback functions that are ready to be executed (eg: attaching an _eventHandler_ functions to DOM elements to reac to certain events).
In the case of NodeJS, the Web APIs are replaced with C++ bindings and Thread Pools.

## Behind The Scenes

The first thing that happens after the event is that the function is put into the Callback Queue, then when the Call Stack is empty the callback function is passed to the Stack so it can be executed. This happens by something called the Event Loop (it basically takes callback fuctions from the Callback Queue and puts it into the Call Stack so they can be executed).
The Event Loop is essential for JavaScript's non-blocking concurrency model.
