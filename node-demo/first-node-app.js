// Import module-demo
const demoModule = require('./module-demo');
//Use const while importing module to avoide mistakes.

console.log("hello world!")

/* 
We don't have most global object like window and document 
in node as they are specific to browser. nut we have lot og
inbuilt module
Example: 
 document.getElementById("if");
 result in undefined error
*/

// import a single function
// demo();

// import as object
demoModule.demo();
demoModule.demoObj();

