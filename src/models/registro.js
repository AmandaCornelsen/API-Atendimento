
const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true, 
        trim: true 
    },
    descricao: { 
        type: String, 
        required: true 
    },
    ativo: { 
        type: Boolean, 
        default: true 
    }
}, { 
});

module.exports = mongoose.model('Registro', registroSchema);
