const EventEmiiter = require('events'); // return a class

/* 
event object has only track of event emitted from it and not from other modules. 
so we cab't emit from one modulw and cathc it in other.so best pratice is to extend
 the event emitter class.
 */


 class event extends EventEmiiter
 {
    emitDemo()
    {
        this.emit('emitted');
    }
 }

 module.exports = event;