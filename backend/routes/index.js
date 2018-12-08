/*const Product = require('../app/controller/product')
const User = require('../app/controller/signup')
const Uexist = require('../app/controller/login')
const Reuser = require('../app/controller/reset')
const Dash = require('../app/controller/logout')
const Del = require('../app/controller/delete')


module.exports = function(app) {
    app.post('/create', Product.create);
    app.post('/find',  Product.find);
    app.post('/signup', User.signup);
    app.post('/login', Uexist.userExist);
    app.post('/reset',  Reuser.userExist);
    app.post('/delete', Del.userdelete);
    app.post('/logout', Dash.dash);
}*/

const Rcord = require('../controller/receiveCoord')
const Scord = require('../controller/sendCoord')
const Send_otp = require('../controller/otp')
const Verify_otp = require('../controller/otp')
const check_driver_status = require('../controller/check_driver_status')

module.exports= function(app){
	console.log("inside index ka function");
	app.get('/sendcoords', Rcord.receiveCo);
	app.get('/receivecoords',Scord.getCoord);
	app.get('/sendotp', Send_otp.mobileVerify);
	app.get('/verifyotp',Verify_otp.otpVerify);
	app.get('/check_driver_status',check_driver_status.get_driver_status);
}
