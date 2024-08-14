const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Transfer-Encoding': 'chunked' });
  res.write('This is the first chunk.\n');
  setTimeout(() => {
    res.write('This is the second chunk after a delay.\n');
    setTimeout(() => {
      res.write('This is the final chunk.\n');
      res.end();
    }, 1000);

  }, 1000);

}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
