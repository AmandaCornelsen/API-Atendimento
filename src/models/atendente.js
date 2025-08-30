const mongoose = require('mongoose');
const Counter = require('./counter');

const atendenteSchema = new mongoose.Schema({
    numero: {
        type: Number,
        unique: true
    },
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
});

atendenteSchema.pre('save', async function(next) {
    if (this.isNew) {
        const counter = await Counter.findOneAndUpdate(
            { name: 'atendente' },       
            { $inc: { seq: 1 } },     
            { new: true, upsert: true } 
        );
        this.numero = counter.seq;
    }
    next();
});

atendenteSchema.set('toJSON', { transform: function(doc, ret) {
        const obj = {
            id: ret.numero, 
            nome: ret.nome,
            idade: ret.idade,
            ativo: ret.ativo
        };
        return obj;
    }
});

module.exports = mongoose.model('Atendente', atendenteSchema);
