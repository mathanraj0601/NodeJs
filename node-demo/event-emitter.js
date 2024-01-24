const EventEmiiter = require('events'); // return a class

/* 
event object has only track of event emitted from it and not from other modules. 
so we cab't emit from one module and catch it in other because of multiple instance of emitter.so best pratice is to extend
 the event emitter class to have a single instance across module to overcome above.
 */


 class event extends EventEmiiter
 {
    emitDemo()
    {
        this.emit('emitted');
    }
 }

 module.exports = event;
