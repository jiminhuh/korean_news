const request = require('request');

document.getElementById("news").onclick(() => {
    request('https://newsapi.org/v2/everything?q=Apple', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
});
