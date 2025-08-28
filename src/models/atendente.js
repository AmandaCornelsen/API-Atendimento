
const mongoose = require('mongoose');

const atendenteSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true, 
        trim: true 
    },
    idade: { 
        type: String, 
        required: true 
    },
    ativo: { 
        type: Boolean, 
        default: true 
    }
}, { 
});

module.exports = mongoose.model('Atendente', atendenteSchema);
