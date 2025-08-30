const Registro = require('../models/registro');

class RegistroRepository {
    async findAll() {
        return await Registro.find({
            ativo: true
        });
    }

    async findByNumero(numero) {
        return await Registro.findOne({
            numero
        });
    }

    async create(data) {
        const obj = new Registro(data);
        return await obj.save();
    }

    async updateByNumero(numero, data) {
        return await Registro.findOneAndUpdate({
                numero
            },
            data, {
                new: true,
                runValidators: true
            }
        );
    }

    async deleteByNumero(numero) {
        return await Registro.findOneAndUpdate({
            numero
        }, {
            ativo: false
        }, {
            new: true
        });
    }
}

module.exports = new RegistroRepository();