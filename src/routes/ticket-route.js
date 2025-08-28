const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/ticket-controller');

// Middleware de validação
const validateTicket = (req, res, next) => {
    // PEGUE do req.body!
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
        return res.status(400).json({
            success: false,
            message: "Todos os campos obrigatórios devem ser preenchidos"
        });
    }

    next();
};

// Rotas
router.get('/', TicketController.getAll);
router.get('/:id', TicketController.getById);
router.post('/', validateTicket, TicketController.create);
router.put('/:id', validateTicket, TicketController.update);
router.delete('/:id', TicketController.delete);

module.exports = router;
