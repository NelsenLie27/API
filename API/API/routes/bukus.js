var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond dari BUKU router');
//});

module.exports = router;

router.post('path', (req, res) => {
    res.status(201).json({
        message: "Data berhasil disimpan"
    });
});