var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  users: {
    wujunwei: '11'
  },
  port: 8000
});

app.get('/foo', function(req, res, next) {
  res.send('bar');
});

app.listen();