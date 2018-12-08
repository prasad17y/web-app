//var GeoJSON = require('mongoose-geojson-schema');
//var mongoose = require('mongoose');

//var point = mongoose.Schema.Types.Point;

const MongoClient = require('mongodb').MongoClient;
const SendOtp = require('sendotp');

// replace the uri string with your connection string.
const uri = "mongodb+srv:prasad123:prasad123@cluster123-zm6x1.mongodb.net/test?retryWrites=true"
//send otp

const sendOtp = new SendOtp('245537AZjd15gh5bd98119');


module.exports.mobileVerify = (req,res,next) => {

	console.log('inside mobile verif');
  MongoClient.connect(uri, function(err, client, mobileNo, otpToVerify) {
       console.log("inside connect");
	if(err)
	{
		console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
		res.send("server problem");
	}
	
       var dbo = client.db("sample");
       var mobileNo = req.query.phone_number;
       var query1 = { mobile_no:mobileNo };
	
       	dbo.collection("prnt_db").find(query1).toArray(function(err, result) {
          if (err)
          {
          	res.send("false");
          }
          sendOtp.send(mobileNo, "BUSNIT", function (error, data, response) {
 		if(error)
		{
			console.log("error");
			res.send("request otp again");
		}

          	  res.send("true");
          });

      });
      client.close();
    });
  };

module.exports.otpVerify = (req,res,next) => {
  var otpToVerify = req.query.entered_otp;
  var phone_number = req.query.phone_number;
console.log(otpToVerify);
console.log(phone_number);
 sendOtp.verify(phone_number, otpToVerify, function(error,data,respnse){
    console.log(data);
    if(data.type == 'success'){
      console.log('OTP verified successfully');
	res.send("verified");
      //further action
    }
    if(data.type == 'error'){
      console.log('OTP verification failed');
	res.send("invalid_otp");
      //further action
    }
  });
};

