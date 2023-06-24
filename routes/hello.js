var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res, next) {
    res.send('World!');
 });
 
 app.get('/natalia', (req, res) => {
    res.send('witaj Natalia!');
});
 module.exports = router;
