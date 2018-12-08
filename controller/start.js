var express=require('express');
var app=express();
var http = require('http');
console.log('inside start')
app.get('/',function(req,res)
{
	res.send('Hello World!');
});

var server = http.createServer(app);

app.use(express.static(__dirname+ '/')); 

app.get('/index',function(req,res){
	res.redirect('index.html');
});

app.get('/request1', function(req, res){
	 var list = require('./request');
    res.send(list.getList());
    console.log('inside request')
});

app.listen(8080);
