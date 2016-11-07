const https = require('https');


function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var content = '';

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      content += data;
    });

    response.on('end', function(data) {
      console.log("Response stream complete.")
      console.log(content);
    });
  });

}

getAndPrintHTML();

