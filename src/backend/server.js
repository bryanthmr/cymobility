const http = require('http');
const app = require('../backend/App');

app.set('port', process.env.PORT || 4200);
const server = http.createServer(app);

server.listen(process.env.PORT || 4200);