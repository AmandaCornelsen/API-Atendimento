const AtendenteRepository = require('../repositories/atendente-repository');

class AtendenteController {
    async getAll(req, res) {
        try {
            const data = await AtendenteRepository.findAll();
            res.status(200).json({
                success: true,
                data
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

    async getById(req, res) {
        try {
            const numero = parseInt(req.params.id);
            const obj = await AtendenteRepository.findByNumero(numero);
            if (!obj)
                return res.status(404).json({
                    success: false,
                    message: 'Não encontrado'
                });
            res.status(200).json({
                success: true,
                data: obj
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

    async create(req, res) {
        try {
            const obj = await AtendenteRepository.create(req.body);
            res.status(201).json({
                success: true,
                data: obj
            });
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            });
        }
    }

    async update(req, res) {
        try {
            const numero = parseInt(req.params.id);
            const obj = await AtendenteRepository.updateByNumero(numero, req.body);
            if (!obj)
                return res.status(404).json({
                    success: false,
                    message: 'Não encontrado'
                });
            res.status(200).json({
                success: true,
                data: obj
            });
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            });
        }
    }

    async delete(req, res) {
        try {
            const numero = parseInt(req.params.id);
            const obj = await AtendenteRepository.deleteByNumero(numero);
            if (!obj)
                return res.status(404).json({
                    success: false,
                    message: 'Não encontrado'
                });
            res.status(200).json({
                success: true,
                message: 'Removido com sucesso'
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
}

module.exports = new AtendenteController();