// Add two number 
// var a=7
// var b=8
// var c=a+b
// console.log(c)

// Add two number using modules
// var calc = require('./Cal.js')
// result = calc.add(4,5)
// console.log("The Output is " + result) 


// var http = require('http')
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write("Welcome Back")
//     res.end()
// }).listen(8080)

// File System Module 
// var fs = require('fs')

// fs.readFile(File name,Encoding, callback function)
// fs.readFile('Cal.js','utf8', function(err, data){
//     if (err) {
//         console.error(err);
//         return;
//       }
//     console.log(data)
// })

// fs.writeFile('Cal1.js','console.log("done")' ,function(err){
//     console.log("Data Saved")
// })

// fs.appendFile('Cal1.js','console.log("done")' ,function(err){
//     console.log("Data Saved")
// })

// fs.unlink('Cal1.js',function(err){
//     console.log("Deleted")
// }) 

// Using Express.js
const express = require('express')

const app = express();
app.get('/',function(req,res){
    res.send("Hello world!")
})
app.get('/roy',function(req,res){
    const id = req.query.id
    res.send("Welcome Roy")
})
app.get('/roy/:id',function(req,res){
    const id = req.params.id
    res.send("Welcome you to roy's "+ id +" doc")
})
app.listen(9000, function(req,res){
    console.log("Running....");
});
