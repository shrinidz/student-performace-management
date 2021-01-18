/*var express = require('express');
var app = express();

//your routes here
app.get('/', function (req, res) {
    res.send("Hello World!");
});
*/

var express =require('express');

var path = require('path');

var app = express();



app.get('/',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'homePage.html'));
});




app.get('/LoginPage',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'LoginPage.html'));
});

app.get('/adminLogin',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'adminLogin.html'));
});

app.get('/signUp',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'signUp.html'));
});

app.get('/enterMarks',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'enterMarks.html'));
});

app.get('/displayMarks',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'displayMarks.html'));
});

app.get('/progressChart',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'progressChart.html'));
});

app.get('/LoginPage.css',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'LoginPage.css'));
});

app.get('/sweetalert.min.js',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'sweetalert.min.js'));
});

app.get('/sweetalert.css',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'sweetalert.css'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
