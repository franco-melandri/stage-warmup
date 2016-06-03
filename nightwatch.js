var fs = require('fs');

//var access = fs.createWriteStream(__dirname + '/node.access.log', { flags: 'a' });
//process.stdout.write = access.write.bind(access);

require('nightwatch/bin/runner.js');
