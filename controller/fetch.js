var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*app.post('/fetch',function(req,res){
  require('./otp.js');
  connect(req.body.mobileNo,req.body.otpToVerify);
})*/
//var GeoJSON = require('mongoose-geojson-schema');
//var mongoose = require('mongoose');

//var point = mongoose.Schema.Types.Point;
app.post('/fetch',function(req,res)
{
const MongoClient = require('mongodb').MongoClient;
const SendOtp = require('sendotp');

// replace the uri string with your connection string.
const uri =
"mongodb+srv:prasad123:prasad123@cluster123-zm6x1.mongodb.net/test?"


MongoClient.connect(uri, function(err, client) {
   if(err)
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   var dbo = client.db("sample");
   var mobileNo = req.body.mobileNo;
   var query = { mobile_no: mobileNo };

   	 dbo.collection("prnt_db").find(query).toArray(function(err, result) {
    if (err) throw err;
    //console.log(result);
    //send otp
    const sendOtp = new SendOtp('245537AZjd15gh5bd98119');

    sendOtp.send(mobileNo, "BUSNIT", function (error, data, response) {
      console.log(data);
    });
    var otpToVerify = req.body.otpToVerify;
    sendOtp.verify(mobileNo, otpToVerify, function(error,data,respnse){
      console.log(data);
      if(data.type == 'success'){
        console.log('OTP verified successfully');
        //further action
      }
      if(data.type == 'error'){
        console.log('OTP verification failed');
        //further action
      }
    });
    //console.log(arr);
});





    client.close();

     });

});
