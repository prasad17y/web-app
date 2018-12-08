var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

var point = mongoose.Schema.Types.Point;
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = 
"mongodb+srv:prasad123:prasad123@cluster123-zm6x1.mongodb.net/test?"


MongoClient.connect(uri, function(err, client) {
   if(err) 
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   var dbo = client.db("sample");
   
   	 dbo.collection("live_coordinates").find({}).toArray(function(err, result) {
    if (err) throw err;

    //console.log(result);
    var arr = new Array(result.length);
    //console.log(result[0].name);
    for(var i=0;i<result.length;i++)
    {
    	arr[i]=new Array(2);
    	
    	arr[i][0]=result[i].x_cord;
    	arr[i][1]=result[i].y_cord;

    }
    console.log(arr);
});

   	// mongoimport --uri "mongodb://root:<PASSWORD>@atlas-host1:27017,atlas-host2:27017,atlas-host3:27017/<DATABASE>?ssl=true&replicaSet=myAtlasRS&authSource=admin" --collection myData --drop --file /somedir/myFileToImport.json

   	

   	
	
    client.close();

     });


	

