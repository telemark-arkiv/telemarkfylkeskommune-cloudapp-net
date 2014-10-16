'use strict';

var http = require('http')
  , fs = require('fs')
  , request = require('request')
  , host = 'http://telemarkfylkeskommune.cloudapp.net'
  , server
  ;

server = http.createServer(function (req, resp) {
  if(req.url == '/Files/Get/styles.public-journal.css'){
    var fileStream = fs.createReadStream('css/public-journal.css')
      ;
    fileStream.pipe(resp);
  } else {
    req.pipe(request(host+req.url)).pipe(resp);
  }
});

server.listen(8000, function(){
  console.log('Server listening on port 8000');
});