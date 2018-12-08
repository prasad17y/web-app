
// ...add a method, which we do in this example:
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv:prasad123:prasad123@cluster123-zm6x1.mongodb.net/test?"

var arrayList = require('array-list')
 
// with limit
//var arr = arrayList(100)
module.exports = {
	getList: function(){
		var arr ;
		MOngoClient.connect(uri, function(err, client)
		{
		   if(err) 
		        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
		   var dbo = client.db("sample");
		   
		   	 dbo.collection("live_coordinates").find({}).toArray(function(err, result) {
			    if (err) throw err;
			    arr = new Array(result.length);
			    for(var i=0;i<result.length;i++)
			    {
			    	arr[i]=new Array(2);
			    	
			    	arr[i][0]=result[i].x_cord;
			    	arr[i][1]=result[i].y_cord;

			    }			    
			})
		})
		return arr;
    	
	}
	
};


