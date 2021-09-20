const fs = require('fs/promises');

const repoFolder = '../';

fs.readdir(repoFolder).then((files) => files.forEach((file) => console.log(file)));
