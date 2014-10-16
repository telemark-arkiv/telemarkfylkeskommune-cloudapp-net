'use strict';

var http = require('http')
  , fs = require('fs')
  , request = require('request')
  , config = require('../config')
  , server
  ;

server = http.createServer(function (req, resp) {
  if(req.url == '/Files/Get/styles.public-journal.css'){
    var fileStream = fs.createReadStream('css/public-journal.css')
      ;
    fileStream.pipe(resp);
  } else {
    req.pipe(request(config.host + req.url)).pipe(resp);
  }
});

server.listen(config.port, function(){
  console.log('Server listening on port ' + config.port);
});