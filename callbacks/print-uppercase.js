const https = require('https');

var getHTML = require('./client-http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html.toUpperCase());
}


getHTML(requestOptions, printHTML)
