/*
NO TERMINAL

NODE_DEBUG=INFO,ERROR,WARNING node Atividade_07/main.js
*/
const Logger = require("./logger");
const logger = new Logger();

logger.info(); //INFO 89142: 'Valor lido: [100]!'
logger.error(); //ERROR 89297: 'Valor lido: [100]!'
logger.warning(); //WARNING 89421: 'Valor lido: [100]!'

