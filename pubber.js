var zmq = require('zeromq');
var pub_sock = zmq.socket('pub');
var rn = require('random-number');

pub_sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher bound to port 3000');


var rn = require('random-number');
var gen = rn.generator({
  min:  0
, max:  1000
, integer: true
})


setInterval(function(){
  console.log('sending a multipart message envelope');
  var d = ['transaction', 'tx type', 'sender', 'receiver', 'amount', gen()]
  pub_sock.send(d);
  console.log(d);
}, 100);