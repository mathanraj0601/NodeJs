const mongoose = require('mongoose');

// objectId
const id = new mongoose.Types.ObjectId();
console.log(id);
console.log(id.getTimestamp());


// Validation object ID
const isValid = mongoose.Types.ObjectId.isValid('1234')
console.log(isValid);


