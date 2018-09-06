# ECMAScript

ECMAScript 6 is Javascript specification standards so as to foster multiple independent implementations. ECMAScript is commonly used for not only client-side scripting but also server applications and services using Node.js. However, no modern browsers support ES6 at this time, it needs a compiler to compile ES6 to pure Javascript. [Babel](https://babeljs.io) + [Webpack](https://webpack.js.org) is a good choice for now.

Although it takes a plenty of time to master all features in this ES6 version, you will find it worth then. This demo shows you some of which you usually might want to use. The following list tells you what is obtained (consisted of):
- arrow functions
- classes
- parameters
- matching
- built-in functions
- modules
- generators
- promises

## Arrow Functions
A function shorthand using `=>` syntax. One thing new in arrow functions is they share the same lexical `this` throughout their block of codes.

More info [Arrow functions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Classes
ES6 class is a simple OOP-style. Classes support prototype-based inheritance, super calls, instance and static methods and constructors. A child class has only one parent, but you can make a curve function which return a class combined multiple into one. Unlike Java, ES6 class allow one `constructor()` in each class, you might want create multiple constructors for variety of cases by using static method.

More info [Classes - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Parameters
Turn an array into consecutive arguments in a function call.

More info [Rest parameters - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Spread syntax - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Matching
Pack values from arrays, or properties from objects, into distinct variables.

More info [Destructuring assignment - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Built-in Functions
ES6 built-in methods

More info [Standard built-in objects - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

## Modules
Import and export stuff.

More info [import - Web technology for developers | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), [export - Web technology for developers | MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

## Generators
New concept in implementing a function, where the control flow can be paused and resumed, in order to produce sequence of values (either finite or infinite).

More info [Iterators and generators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

## Promises
A library for asynchronous programing.

More info [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
