global.console.log("global object");

/*
- In node the varible are not by default to global scopes.
- Each file acts as module like a class or constructor function with parameter.
- Content inside each file has access only within the file 
- To make it value to other file/module we need to export and load
*/

// The paramter for constructor function are
console.log(exports, "exports") //properties exported
console.log(require, "require") // required / loaded module
console.log(module, "module") // detail about current module
console.log(__filename, "filename") 
console.log(__dirname, "dirname")

function moduleDemo()
{
    console.log("i am in module-demo.js")
}

function moduleDemoObj()
{
    console.log("i am in module-demo.js obj")
}

//export a single function
// module.exports = moduleDemo;  

// export as object
module.exports.demoObj = moduleDemoObj;  
module.exports.demo = moduleDemo; 
