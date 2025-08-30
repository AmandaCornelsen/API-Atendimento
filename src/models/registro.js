const mongoose = require('mongoose');
const Counter = require('./counter');

const registroSchema = new mongoose.Schema({
    numero: {
        type: Number,
        unique: true
    },
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
});

registroSchema.pre('save', async function(next) {
    if (this.isNew) {
        const counter = await Counter.findOneAndUpdate(
            { name: 'registro' },       
            { $inc: { seq: 1 } },     
            { new: true, upsert: true } 
        );
        this.numero = counter.seq;
    }
    next();
});

registroSchema.set('toJSON', {
    transform: function(doc, ret) {
        const obj = {
            id: ret.numero, 
            nome: ret.nome,
            descricao: ret.descricao,
            ativo: ret.ativo
        };
        return obj;
    }
});

module.exports = mongoose.model('Registro', registroSchema);
