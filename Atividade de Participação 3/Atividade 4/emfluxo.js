const fs = require('fs');
const path = require('path'); 

const init = Date.now();
const local = path.join(__dirname, 'arquivo.txt');
const stream = fs.createReadStream(local, { encoding: 'utf-8' });
stream.on("end", () => {
    const end = Date.now();
    console.log(`Tempo de execução: ${Date.now() - init}ms`);
})

stream.pipe(process.stdout);