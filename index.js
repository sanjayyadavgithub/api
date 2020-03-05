// var time = 0;
// var timer = setInterval(function () {
// 	// body...
// 	time = time + 2;
// 	console.log(time + ' secound have passed');

// 	if(time > 8){
// 		clearInterval(timer);
// 	}
// },3000);


// console.log(__dirname);
// console.log(__filename);


//normal function
// function call(fun){
// 	fun();
// }

// function sayHi(){
// 	console.log('hi');
// }
// sayHi();


// var sy = function(){
//   console.log('sy')
// };
// sy();

// var s = ()=>{
// 	console.log('ghjk');

// };
// s();
// cal l(s);

//import and assign another module 
// var app = require('./app');

// console.log(app.counter(['sanjay','ajay','mukesh']));
// console.log(app.adder(app.pi,4));

//Events and Emitter  
//var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',(msg)=>{
// 	console.log(msg);
// });

// myEmitter.emit('someEvent','the event was emitted');


// var util =  require('util');

// var Person = function(name){
// 	this.name = name;
// };
// util.inherits(Person,events.EventEmitter);

// var james = new Person('james');
// var james1 = new Person('james1');
// var james2 = new Person('james2');

// var people = [james,james1,james2];
// people.forEach(function(person){
//   person.on('speak',function(msg){
//   	console.log(person.name  + ' said : ' + msg);
//   });  
// });


// james2.emit('speak', 'hey dudes');
// james1.emit('speak', 'hi bro what are you doing');



//Reading & Writing files ------>
//const fs = require('fs');

//read file--------------
//var read = fs.readFileSync('test.txt', 'utf8');
//clconsole.log(read)

// var read = fs.readFile('test.txt', 'utf8', function (err, data) {
//   //console.log(data);
//   //write file-----------------------------------
//   fs.writeFileSync('write.txt', data);
// });
//fs.writeFileSync('write.txt', read);


//fs.unlink('write.txt');  //delete file
//fs.mkdirSync('stuff');  //foler create
//fs.rmdirSync('stuff');   //remove folder


// fs.mkdir('stuff', function (err, data) {
//   fs.readFile('test.txt', 'utf8', function (err, data) {
//     fs.writeFileSync('./stuff/write.txt', data);
//   });
// });

// fs.unlinkSync('./stuff/write.txt', function () {
//   fs.rmdirSync('stuff');
// });

//==========client and server =================

// const http = require('http');
// const fs = require('fs');


// const server = http.createServer((req, res) => {
//   console.log('request was made : ' + req.url);
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   const myread = fs.createReadStream(__dirname + '/test.txt', 'utf8');
//   //const mywrite = fs.createWriteStream(__dirname + '/write3.txt');
//   myread.pipe(res); ///read file data in to browser 
//   //res.end('ending http res');
// });

// server.listen(3000, '127.0.0.1');
// console.log('sanjay yadav listen your mess');


// -------------------Nodejs Candy Mountain ---------------
//Buffers---------------------
// temporary Storage spot
// for a chunk of data that is being
// transferred from ane place to another
// the buffer is filled with data then passed along
// transfer small chunks of data at a timer

// Streams--------- Pipes--------------------
// Writable stream - > allow node js to write data ta a stream
// Readable stream - > allow nodejs to read data from a stream
// Duplex - > can read and write to a stream


//const http = require('http');
//const fs = require('fs');

//const myread = fs.createReadStream(__dirname + '/test.txt', 'utf8');
//const mywrite = fs.createWriteStream(__dirname + '/write2.txt');

// myread.on('data', (chunk) => {
//   console.log('new chunk recieved ');
//   //console.log(chunk);
//   mywrite.write(chunk); 
// });

//myread.pipe(mywrite);



// ////======================copy file data from file aand see in browser =========const http = require('http');
// const fs = require('fs');
// const http = require('http');


// const server = http.createServer((req, res) => {
//   console.log('request was made : ' + req.url);
//   res.writeHead(200, {
//     'Content-Type': 'text/json' //change according to farmat
//   });
//   const myread = fs.createReadStream(__dirname + '/index.json', 'utf8'); //test.txt' ---any file name to be write
//   //const mywrite = fs.createWriteStream(__dirname + '/write3.txt');
//   myread.pipe(res); ///read file data in to browser
//   //json farmat write here
//   //res.end(Jsson.stringify(json var))
//   //res.end('ending http res');
// });

// server.listen(3000, '127.0.0.1');
// console.log('sanjay yadav listen your mess');



// routing system in nodejs---------------------------


// const fs = require('fs');
// const http = require('http');


// const server = http.createServer((req, res) => {
//   console.log('request was made : ' + req.url);
//   if (req.url == '/home' || req.url == '/') {
//     res.writeHead(200, { 'Content-type': 'text/html' });
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   } else {
//      res.writeHead(200, {
//        'Content-type': 'text/html'
//      });
//      fs.createReadStream(__dirname + '/index1.html').pipe(res);
//   }
// });
// server.listen(3000);
// console.log('yo dawgs , now listenting to port 3000');

//////--------------express module----------------
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/index1', (req, res) => {
  res.sendFile(__dirname + '/index1.html');
});
app.get('/profile/:name', (req, res) => {
  res.sendFile('you are view ' + req.params.name);
});

app.listen(30001);
