const net = require('net');
const server = net.createServer((c) => {
   // 'connection' listener.
   console.log('client connected');
   c.on('data', (data) => {
      console.log(data);
   });
   c.write('hello\r\n');
   c.pipe(c);
});
server.on('error', (err) => {
   throw err;
});
server.listen(8124, () => {
   console.log('server bound');
});

// server.listen('/tmp/echo.sock', () => {
//    console.log('server bound');
// });