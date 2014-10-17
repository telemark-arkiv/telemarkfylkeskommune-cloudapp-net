'use strict';

var http = require('http')
  , fs = require('fs')
  , request = require('request')
  , config = require('../config')
  , intercepts = config.intercepts.map(function(item){return item.remote})
  , server
  ;

function getLocalFile(remoteFile){

  for(var i in config.intercepts){
    var localFile
      ;

    if(config.intercepts[i].remote == remoteFile){
      localFile = config.intercepts[i].local;
    }

    return localFile;
  }

}

server = http.createServer(function (req, resp) {
  if(intercepts.indexOf(req.url) > -1){
    var localFile = getLocalFile(req.url)
      , fileStream = fs.createReadStream(localFile)
      ;
    fileStream.pipe(resp);
  } else {
    req.pipe(request(config.host + req.url)).pipe(resp);
  }
});

server.listen(config.port, function(){
  console.log('Server listening on port ' + config.port);
});