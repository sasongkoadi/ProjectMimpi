var express = require('express')
var path = require('path')
var static = express.static 

/* Get Static Data Image */
static(path.join(__dirname,'../public'))

module.exports = static 