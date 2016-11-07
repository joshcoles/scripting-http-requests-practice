const https = require('https');


function getAndPrintHTML(options) {

  var otherObject = {};

  otherObject.host = options.host;
  otherObject.path = options.path;



  var content = '';

  https.get(otherObject, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      content += data;
    });

    response.on('end', function(data) {
      console.log("Response stream complete.")
      console.log(content);
    });

    response.on('error', function(err) {
      console.log('you goofed');
    });

  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);
