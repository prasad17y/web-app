
// ...add a method, which we do in this example:
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv:prasad123:prasad123@cluster123-zm6x1.mongodb.net/test?"

var arrayList = require('array-list')
 
// with limit
//var arr = arrayList(100)
module.exports.get_driver_status = (req, res, next) => {
	
		MongoClient.connect(uri, function(err, client)
		{
		   if(err) 
		        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
		   var dbo = client.db("sample");
		   
		   	 dbo.collection("live_coordinates").count(function(err, count) {
			    if (!err && count == 0) 
			    {
			    	res.send("false");
			    }
			    else if(!err)
			    {
			    	res.send("true");
			    }
			    
			    			    
			})
		})
		
    	
};
	



