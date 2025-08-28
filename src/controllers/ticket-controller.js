
const TicketRepository = require('../repositories/ticket-repository');

class TicketController {
    async getAll(req, res) {
        try { const data = await TicketRepository.findAll(); 
            res.status(200).json({ 
                success:true,
                data
                });
             } 
        catch(e) { res.status(500).json({
             success:false, 
             message:err.message 
            }); 
        }
    }

    async getById(req, res) {
        try { 
            const obj = await TicketRepository.findById(req.params.id);
            if(!obj) 
                return res.status(404).json({ 
                success:false, 
                message:'Não encontrado'
         });
            res.status(200).json({
                 success:true, 
                 data: obj });
        } catch(err) { res.status(500).json({
                success:false, 
                message:err.message 
            }); 
        }
    }

    async create(req, res) {
        try { 
            const obj = await TicketRepository.create(req.body);
             res.status(201).json({ 
                success:true, 
                data: obj 
            }); 
        }
        catch(e) { 
            res.status(400).json({ 
                success:false, 
                message:err.message 
            }); 
        }
    }

    async update(req, res) {
        try { 
            const obj = await TicketRepository.update(req.params.id, req.body);
            if(!obj) 
                return res.status(404).json({ 
            success:false, 
            message:'Não encontrado' 
        });
            res.status(200).json({ 
                success:true, 
                data: obj 
            });
        } catch(e) { res.status(400).json({ 
            success:false, 
            message:e.message 
        }); 
    }
    }

    async delete(req, res) {
        try { const obj = await TicketRepository.delete(req.params.id); 
            res.status(200).json({ 
                success:true, 
                message:'Removido com sucesso' 
            }); 
        }
        catch(e) { res.status(500).json({ 
            success:false, 
            message:err.message 
        }); 
    }
    }
}

module.exports = new TicketController();
