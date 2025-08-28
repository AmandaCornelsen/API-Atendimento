// bin/server.js

const http = require('http');
const app = require('../src/app');
const mongoose = require('mongoose');

const port = searchPort(process.env.PORT || '3000');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://seu_usuario:sua_senha@localhost:27017/apiAtendimento?authSource=admin';

// Cria o servidor HTTP fora do .then(), mas inicia só depois do MongoDB
const server = http.createServer(app);

// Conecta no MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
    console.log('MongoDB conectado com sucesso!');

    // Inicia o servidor
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    console.log(`API executada na porta: ${port}`);
})
.catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err);
});

// Função para normalizar porta
function searchPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
}

// Tratamento de erros
function onError(error) {
    if (error.syscall !== 'listen') throw error;

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requer privilégios elevados.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' já está em uso.');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Mensagem quando o servidor está ouvindo
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'porta ' + addr.port;
    console.log('Servidor ouvindo em ' + bind);
}
