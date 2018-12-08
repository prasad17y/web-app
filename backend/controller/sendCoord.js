module.exports.getCoord = (req, res, next) => {
	var list = require('./request');
    res.send(list.getList());
}