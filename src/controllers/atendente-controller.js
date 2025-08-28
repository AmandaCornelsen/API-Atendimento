
const AtendenteRepository = require('../repositories/atendente-repository');

class AtendenteController {
    async getAll(req, res) {
        try { 
            const data = await AtendenteRepository.findAll(); 
            res.status(200).json({ 
                success:true, data 
            }); 
        } catch(e) { 
            res.status(500).json({ 
                success:false, 
                message:e.message 
            }); 
        }
    }

    async getById(req, res) {
        try { 
            const obj = await AtendenteRepository.findById(req.params.id);
            if(!obj)
                return res.status(404).json({
                success:false, 
                message:'Não encontrado' 
        });
            res.status(200).json({ 
                success:true, 
                data: obj 
            });
        } catch(e) { 
            res.status(500).json({ 
                success:false, 
                message:e.message 
            }); 
        }
    }

    async create(req, res) {
        try { 
            const obj = await AtendenteRepository.create(req.body); 
            res.status(201).json({ 
                success:true, 
                data: obj 
            }); 
        }catch(e) { 
            res.status(400).json({ 
                success:false, 
                message:e.message 
            }); 
        }
    }

    async update(req, res) {
        try { 
            const obj = await AtendenteRepository.update(req.params.id, req.body);
            if(!obj) 
                return res.status(404).json({ 
            success:false, 
            message:'Não encontrado' 
        });
            res.status(200).json({ 
                success:true, 
                data: obj });
        } catch(e) {
            res.status(400).json({ 
                success:false, 
                message:err.message 
            }); 
        }
    }

    async delete(req, res) {
        try { 
            const obj = await AtendenteRepository.delete(req.params.id); 
            res.status(200).json({ 
                success:true, 
                message:'Removido com sucesso' 
            }); 
        }
        catch(e) { 
            res.status(500).json({ 
                success:false, 
                message:e.message 
            }); 
        }
    }
}

module.exports = new AtendenteController();
