const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/valid') {
    res.statusCode = 200;
    res.end('Valid route');
  } else if (req.method === 'GET' && req.url === '/error') {
    res.statusCode = 500;
    res.end('Internal server error');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
