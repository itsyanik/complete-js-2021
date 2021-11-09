# Linking a JavaScript file
JavaScript, when used for building frontend applications is usually attached to an HTML file. So for this course we'll always have an HTML file to attach our JavaScript code.

In HTML there is a tag where we can write JavaScript code. For now we'll create our `script` tag inside the `head` tag. This is called an *inline* script. It's only advantage is that we do not have to load another file but it's also bad for separating the web page content from the JavaScript logic.

But if we just move the code from the tag to a JavaScript file our HTML will have no way of knowing how to execute the code that we just wrote. Now for this part, we'll use the `script` tag again this time at the end of the `body` tag and to make sure our HTML knows how to find the script we'll have to write it like this: `<script src="script.js" />`.

Do note that since both files are in the same level, all you have to do is write the file name. However if they were in different levels, you'd have to link to the correct path (*eg, file one level above*: `<script src="../script.js" />`).

Ps: the script tag can also be written as `<script src="script.js"></script>`

## Semicolon
We can use a semicolon (;) to tell JavaScript that we are done with that line of code, however you might see some people ommit it in their code. That happens because the simicolon is not really necessary in JavaScript, but it's considered a good practice to keep them in your code.

## Developer Console
To access the developer console, either in the script tag or in a JavaScript file (that will be executed in the browser), you will need to type `console.log()` and then put whatever you want to output between the parenthesis. In the previous lessons, we were already *inside* the console so there was no need to type the function.

```javascript
console.log(20 + 8 + 10 - 2);

const js = "amazing";
if (js === "amazing") {
  console.log("JavaScript is FUN!);
}
```