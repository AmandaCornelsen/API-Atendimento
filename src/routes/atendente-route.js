
const express = require('express');
const router = express.Router();
const AtendenteController = require('../controllers/atendente-controller');

const validate = (req, res, next) => { 

    const { nome, idade } = req.body;

    if (!nome || !idade) {
        return res.status(400).json({
            success: false,
            message: 'Todos os campos obrigatórios devem ser preenchidos'
        });
    }
    next()
};

router.get('/', AtendenteController.getAll);
router.get('/:id', AtendenteController.getById);
router.post('/', validate, AtendenteController.create);
router.put('/:id', validate, AtendenteController.update);
router.delete('/:id', AtendenteController.delete);

module.exports = router;
