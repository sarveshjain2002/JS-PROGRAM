const{EventEmitter} = require('events');
const emitter = new EventEmitter();
emitter.on('message logged', function()
{
  console.log('Listener Called');
});
emitter.emit('message logged');



//dont write this comments below
// var events = require('events');

// var emitter = new events.EventEmitter();

// emitter.on('MessageLogged', function (data) {
//     console.log('Listener called ' + data);
// });

// emitter.emit('MessageLogged', 'Message Logged');
