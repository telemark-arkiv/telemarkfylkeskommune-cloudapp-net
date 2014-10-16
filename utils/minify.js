'use strict';

var compressor = require('node-minify');

new compressor.minify({
  type: 'yui-css',
  fileIn: 'css/public-journal.css',
  fileOut: 'css/public-journal-min.css',
  callback: function(err, min){
    if(err){
      console.error(err);
    } else {
      console.log("Minified");
    }
  }
});