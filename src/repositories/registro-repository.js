
const Registro = require('../models/registro');

class RegistroRepository {
    async findAll() { 
        return await Registro.find({ 
            ativo: true 
        }); 
    }
    async findById(id) { 
        return await Registro.findById(id);
     }
    async create(data) { 
        const obj = new Registro(data); 
        return await obj.save(); 
    }
    async update(id, data) { 
        return await Registro.findByIdAndUpdate(
            id, 
            data, 
            { new: true, runValidators: true }
        ); 
    }
    async delete(id) { 
        return await Registro.findByIdAndUpdate(
            id, 
            { ativo: false }, 
            { new: true }
        ); 
    }
}

module.exports = new RegistroRepository();
