const fs = require('fs');
const path = require('path');

module.exports = (archiveName) => {
    const init = Date.now();
    const local = path.join(__dirname, archiveName);
    const stream = fs.createReadStream(local, { encoding: 'utf-8' });

    stream.on('end', () => {
        const end = Date.now();
        console.log(`Tempo de execução: ${end - init}ms`);
    });

    stream.pipe(process.stdout);
};