// const express = require("express");
// const app = express();
// app.get('/',(req,res)=>{
// 	res.send("this is home page")
// })
// app.get('/about',(req,res)=>{
// 	res.send("ABOUT")
// })
// app.get('/zmx',(req,res)=>{
// 	res.send("ZMXING")
// })
// const port = 5000;
// app.listen(port,()=>{
// 	console.log(`run ${port}`)
// })


var express = require("express");
var app = express();
app.get('/',(req,res)=>{
	console.log(123)
	// res.send('run server ')
})
app.get('/zmx',(req,res)=>{
	res.send('run ZMX PAGE ')
})
var dk=5050;
app.listen(dk,()=>{
	console.log(`runServer${dk}`)	
})
