const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/home':
      res.statusCode = 200;
      res.end('Welcome to Home');
      break;
    case '/about':
      res.statusCode = 200;
      res.end('About Us');
      break;
    case '/contact':
      res.statusCode = 200;
      res.end('Contact Us');
      break;
    default:
      res.statusCode = 404;
      res.end('Page Not Found');
      break;
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
