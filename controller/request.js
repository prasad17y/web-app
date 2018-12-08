
// ...add a method, which we do in this example:
var arrayList = require('array-list')
 
// with limit
//var arr = arrayList(100)
module.exports = {
	getList: function(){
		var myList = arrayList();
		myList.push(1);
		myList.push(2);
		myList.push(3);
		myList.push(4);
    	return myList;
	}
	
};


