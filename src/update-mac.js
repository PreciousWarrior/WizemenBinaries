const fs = require('fs/promises');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

fs.writeFile('./nice.txt', 'nice!').then(async (_) => {
	process.exit(0);
});
