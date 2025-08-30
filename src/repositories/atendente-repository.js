const Atendente = require('../models/atendente');

class AtendenteRepository {
    async findAll() { 
        return await Atendente.find({ ativo: true }); 
    }

    async findByNumero(numero) { 
        return await Atendente.findOne({ numero }); 
    }

    async create(data) { 
        const obj = new Atendente(data); 
        return await obj.save(); 
    }

    async updateByNumero(numero, data) { 
        return await Atendente.findOneAndUpdate(
            { numero },
            data, 
            { new: true, runValidators: true }
        ); 
    }

    async deleteByNumero(numero) { 
        return await Atendente.findOneAndUpdate(
            { numero }, 
            { ativo: false }, 
            { new: true }
        ); 
    }
}

module.exports = new AtendenteRepository();
