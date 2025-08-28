
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    titulo: { 
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

module.exports = mongoose.model('Ticket', ticketSchema);
