
const Atendente = require('../models/atendente');

class AtendenteRepository {
    async findAll() { 
        return await Atendente.find({ ativo: true }); 
    }
    async findById(id) { 
        return await Atendente.findById(id); 
    }
    async create(data) { 
        const obj = new Atendente(data); 
        return await obj.save(); 
    }
    async update(id, data) { 
        return await Atendente.findByIdAndUpdate(
            id, 
            data, 
            { new: true, runValidators: true }
        ); 
        }
    async delete(id) { 
        return await Atendente.findByIdAndUpdate(
            id, 
            { ativo: false }, 
            { new: true }
        ); 
    }
}

module.exports = new AtendenteRepository();
