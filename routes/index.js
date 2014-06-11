var express = require('express');
var router = express.Router();
var os = require('os');

var ifaces = os.networkInterfaces();
var ipAddress = 'localhost';

for (var dev in ifaces) {
    ifaces[dev].forEach(function(details) {
        if (details.family == 'IPv4' && !details.internal) {
            ipAddress = details.address;
        }
    });
}
var link = 'http://' + ipAddress + ':7000';

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: '二维码',
        baseUrl:link
    });
});

module.exports = router;
