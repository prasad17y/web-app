var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
const  coords = require('../routes/api/receiveCoord');



var point = mongoose.Schema.Types.Point;
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = 
"mongodb+srv:prasad123:prasad123@cluster123-zm6x1.mongodb.net/test?"


MongoClient.connect(uri, function(err, client) {
   if(err) 
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   var dbo = client.db("sample");
   var myobj = { name: "tejaswi_1", x_cord:coords.lat,y_cord:coords.lng };
   dbo.collection("live_coordinates").insertOne(myobj, function(err, res){
   	if (err) throw err;
    console.log("1 document inserted");
});
   
   

   	// mongoimport --uri "mongodb://root:<PASSWORD>@atlas-host1:27017,atlas-host2:27017,atlas-host3:27017/<DATABASE>?ssl=true&replicaSet=myAtlasRS&authSource=admin" --collection myData --drop --file /somedir/myFileToImport.json

   	

   	
	
    client.close();

     });


	

