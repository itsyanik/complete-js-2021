# JavaScript Versions

## Brief History
After the internet was invented and made available to the public, developers wanted to make their websites more interactive. In other words, a programming language for the browsers.

In 1995 Netscape (currently Mozilla) hired Brendon Eich to create that language. It was creted in 10 days and it was called Mocha (but it had many fundamental features of modern JavaScript).

In 1996 it was renamed from Mocha to LiveScript to JavaScript. The idea was to attract developers from the Java language which was the most popular at the time.
Also at this time, Microsoft launches the Internet Explorer with JScript (which was a copy of JavaScript).

Now we had two versions of the same language running in different places and in the long run it could cause some real bad issues. In 1997 the languages were submitted to an independant organization called ECMA to standardize it. Thus, EcmaScript1 was born (or ES1).
EcmaScript is used to talk about the standard and JavaScript is used to talk about the language itself as it is implemented in browsers.

Fast forward to 2009 and ES5 is released with lots of great new features. Then in 2015 ES6 is finally launched with the biggest update to the language yet, however it was called ES2015 instead. This happened because EcmaScript moved to an anual cycle, so now there are new releases every year!
Most of the community still refers to ES2015 as ES6!

## Backwards Compatibility
Every feature in the newest JavaScript is backwards compatible all the way back to ES1, and this is pretty unique in the world of programming languages. This means that if you were to write a code like you were in 1995 in a modern application it would work the same.
This happens because one of the principles of JavaScript that is baked into it which is to not break the web. This means that stuff is never removed from the language, instead they're only added to new versions.
New versions in JavaScript are just increments that just add new stuff! This is why they're called releases and not versions.

## Using Modern JavaScript Today
Because it's impossible for browsers to be forward compatible, we can only use code from today's standards. So how do we use modern JavaScript today?

First, let's consider two scenarios: development and production. 

Development: you're building the site / application in your computer. This means that you can use all the modern features of JavaScript as much as you want, as long as you use the latest version of the Google Chrome browser. This ensures that all the features will work.

Production: is when you have finshed building your application, it is deployed to the web and it's running on your user's browsers. Since we cannot assume or ensure that all our users use the latest version of the browsers we have to convert all of these new features that we made back into ES5. This is a proccess known as transpiling and polyfilling. This is done using a tool called [Babel](https://babeljs.io/).

Transpiling and app back to ES5 is only necessary after your app is finished and you want to ship it to your users.

We use ES5 because it is supported in all browsers today, all the way back to Internet Explorer 9 from 2011. So it is safe to assume that all the browsers today can handle ES5 and this is why ES5 is the target for transpiling.

Modern browsers can use most of the features from ES6 already, but it is not supported in older browsers. All the new versions after ES6 have been called ES6+ by the community when talking about browser support. This is what is called the modern JavaScript.