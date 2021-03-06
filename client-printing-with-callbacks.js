const https = require('https');


function getHTML(options, callback) {

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
      callback(content);
    });

    response.on('error', function(err) {
      console.log('you goofed');
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions, printHTML);



