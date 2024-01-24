// Import module-demo
const demoModule = require('./module-demo');
//Use const while importing module to avoid mistakes like reassign the imported values.

console.log("hello world!")

/* 
We don't have most global object like window and document 
in node as they are specific to browser. nut we have lot og
inbuilt module
Example: 
 document.getElementById("if");
 result in undefined error
Example for nodejs 
 global.console.log("hello") or console.log("hello") as nodejs can understand it
*/

// import a single function
// demo();

// import as object
demoModule.demo();
demoModule.demoObj();

