const fs = require('fs');
const path = require('path');

module.exports = (archiveName) => {
    
    const local = path.join(__dirname, archiveName);

    const init = Date.now();
    const text = fs.readFileSync(local, 'utf-8');
    const end = Date.now();
    console.log(text);
    console.log(`Tempo de execução: ${end- init}ms`);
}


