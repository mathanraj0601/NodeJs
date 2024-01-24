// There are lot of inbuilt module available in node some of the are
const os = require('os');
const path = require('path');
const EventEmiiter = require('events'); // return a class
const event= new EventEmiiter();
const file = require('fs');
const Emitter = require('./event-emitter');
const eventExtend = new Emitter();

 /* 
 Require function search precedence
 inbuilt > external modules.
*/

// total memory in the host system
console.log(os.totalmem());

// Get dir of a path
console.log(path.dirname('/'));

//Read a directory
file.readdir('./',(err,files)=>console.log(files));

/* 
listen to event and then call callback function 
(which is called after the event is occured / async activity produce result) 
we don't use event like this. better way is in another file
*/ 
event.addListener('hello', ()=>console.log('hello event')) // or  event.on('hello', ()=>console.log('hello event'))

// emit a event - this will emit a event and search for listener above it from top to bottom till the emit if mentioned below will let to issue.
event.emit('hello')

// Best approch for event for calling between modules.
eventExtend.addListener('emitted',()=>console.log('called emitted'))
eventExtend.emitDemo();






