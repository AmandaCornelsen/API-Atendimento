const express = require('express');
const router = express.Router();

const ticketRoutes = require('./ticket-route');
const atendenteRoutes = require('./atendente-route');
const registroRoutes = require('./registro-route');

router.use('/ticket', ticketRoutes);
router.use('/atendente', atendenteRoutes);
router.use('/registro', registroRoutes);

// Rota principal
router.get('/', (req, res) => {
    res.json({
        message: 'API de Atendimento funcionando!',
        version: '1.0.0',
        endpoints: {
            tickets: '/tickets',
            atendentes: '/atendentes',
            registros: '/registros',
            health: '/health'
        }
    });
});

router.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

module.exports = router;
