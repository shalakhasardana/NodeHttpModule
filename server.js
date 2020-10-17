///Importing node module
const http = require('http');

const hostname = 'localhost';
const port = 3000;

/// creates a new instance of http.Server class. Receives a callback function as a paramter( request handler/request listener)
/// When the server is listening to requests, the request handler is called for every server request.
/// callback has two paramters:request and response
/// when a request comes in and the request handler callback executed the request object will contains properties such as headers,method, url, status and more
/// reconstruct the res from the client using the response object we donot create the respone object ourselves we use the respone object that was passed into the request handler and update its properties which include a setheader method to set the http header of the respone a status code property and more
/// Set A message for the response body using  res.write() method and we must end using the end method. the end method signals to the server that all of the response headers and body have been sent and that the server should consider this message complete.
/// It is also possible to omit the write method and pass information for the body as an argument in the end() method
const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  ////This body can be standard text or html to the repsonse message. once the end mehod is called the response is finish.
  res.end('<html><body><h1>Hello World!</h1></body></html>');
});

/// use listen method:server.listen()-with port number and hostname to listen on
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


///Two other core module that will be userful for us when constructing a node http server is the path module and the fs  module. They are the core modules of Node
/// path:utilities for working with file and directory paths on the server
/// for example: path.extname() returns file extension from given file
/// path.resolve() converts relative path to absolute

/// fs: utilities for interacting with local filesystem
// example: fs.access() check whether a file can be accessed,
/// f.createReadStream() reads from a file in small chunks of data instead of loading entrire file in the memory






