const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path')

router.get('/cart', (req, res, next) => {
    res.send('<h1>You have entered a cart</h1>');
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});



module.exports = router;