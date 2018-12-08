var array_live_coordinates;
function initMap() {
    map = new google.maps.Map(document.getElementById('gmap'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}

function iterative_calling_function()
{
     var clickerFn = function()
     {
		clearInterval(intervalID1);
          iterative_retrieving_coordinates_function();
	}
     var intervalID1 = setInterval(function(){
		var xhttp = new XMLHttpRequest();
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() 
          {
               if (this.readyState == 4 && this.status == 200) 
               {
                    if(this.responseText == "true")
                    {
                         alert("abcd");

                    }
                    
               }
          };
          xhttp.open("GET", "http://13.232.172.203:8080/check_driver_status", true);
          xhttp.send(); 


          /*xhttp.onreadystatechange = function()
          {
               if (this.readyState == 4 && this.status == 200)
               {
                    if(this.responseText === "true")
          		{

          			clickerFn();
          		}
               }
          };
          xhttp.open("GET", "http://13.232.172.203:8080/check_driver_status", true);
          xhttp.send();*/


	},10000);

}

function iterative_retrieving_coordinates_function()
{
     var end_iterative_function = function()
     {
	    alert("driver has ended his journey");
		clearInterval(intervalID);
	}
     var intervalID = setInterval(function()
     {
		var status = retrieving_coordinates();
          if(status==false)
          {
               end_iterative_function();
          }
	},3000);
}

function retrieving_coordinates()
{
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function()
     {
          if (this.readyState == 4 && this.status == 200)
          {
               if(this.responseText==false)
               {
                    //display on map
                    return false;

               }
               else
               {
                    array_live_coordinates=JSON.parse(this.responseText);
                    //snap to road
               }
          }
     };
     xhttp.open("GET", "http://13.232.172.203:8080/check_driver_status", true);
     xhttp.send();

}

function checkDriverStatus(){




	var button = document.getElementById('driver_start_button');
	var chkbx = document.getElementById('test_checkbox');
	var i=2;
	var clickerFn = function() {
	    alert("driver has started his journey");
		clearInterval(intervalID);

	}

	var intervalID = setInterval(function(){
		i=i+1;
		document.getElementById('test_label').innerHTML = i;
		var value1 = document.getElementById('test_checkbox').checked;
		if(value1==true)
		{
			clickerFn();
		}

	},3000);
}


//once he starts, a file in the db starts storing the coordinates sent by the driver
//now keep on checking for new coordinates in the file and fetch those coordinates, until the driver clicks on stop button.
//each time we go to db, find out the number of entries in the file
//and fetch all the new coordinates from the 'last_read_coordinates_id' to 'total_coordinates'.


//push the new fetched coordinates into the 'request' string, and get the response.

//now display response on map.

/*
var bread_crumps = [];
var last_read_coordinates_id=0;
setInterval(function(){
	//fetch the coordinates with id 'last_read_coordinates_id'
	var request='https://roads.googleapis.com/v1/snapToRoads?path=&interpolate=true&key=' + api_key;
	var response=;
},3000);
*/

/*setInterval(function(){alert("Hello")},3000);*/
/*21.1232388,79.0523434*/
