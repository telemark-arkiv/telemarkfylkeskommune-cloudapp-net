'use strict';

var config = {
      host: 'http://<yourserver>.cloudapp.net',
      port: 8000,
      intercepts: [
        {
          remote:'/Files/Get/styles.public-journal.css',
          local:'css/public-journal.css'
        }
      ]
    }
  ;

module.exports = config;