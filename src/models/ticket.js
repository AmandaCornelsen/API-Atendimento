const mongoose = require('mongoose');
const Counter = require('./counter');

const ticketSchema = new mongoose.Schema({
    numero: {
        type: Number,
        unique: true
    },
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
});

ticketSchema.pre('save', async function(next) {
    if (this.isNew) {
        const counter = await Counter.findOneAndUpdate(
            { name: 'ticket' },       
            { $inc: { seq: 1 } },     
            { new: true, upsert: true } 
        );
        this.numero = counter.seq;
    }
    next();
});

ticketSchema.set('toJSON', {
    transform: function(doc, ret) {
        const obj = {
            id: ret.numero, 
            titulo: ret.titulo,
            descricao: ret.descricao,
            ativo: ret.ativo
        };
        return obj;
    }
});

module.exports = mongoose.model('Ticket', ticketSchema);