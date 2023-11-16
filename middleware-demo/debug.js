/*
    We usually go for console.log() for debugging but it will cause lot of comment/ uncessery code
    Debug help us to have seperate debugging for different part of application 
    which can be controlled from outside using envs  like DEBUG
*/
const firstDebugger = require('debug')('first') // debugger with argument first
const secondDebugger = require('debug')('second') // debugger with argument first

firstDebugger("hello i am first");
secondDebugger("Hello i am second");
