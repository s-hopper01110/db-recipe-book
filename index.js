const server = require('./server.js');

const port = 3900;
server.listen(port, function() {
     console.log(`\n === Running on port ${port} ===\n`);
})