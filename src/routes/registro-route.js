
const express = require('express');
const router = express.Router();
const RegistroController = require('../controllers/registro-controller');

const validate = (req, res, next) => { 

    const { nome, descricao } = req.body;

    if (!nome || !descricao) {
        return res.status(400).json({
            success: false,
            message: 'Todos os campos obrigatórios devem ser preenchidos'
        });
    }
 };

router.get('/', RegistroController.getAll);
router.get('/:id', RegistroController.getById);
router.post('/', validate, RegistroController.create);
router.put('/:id', validate, RegistroController.update);
router.delete('/:id', RegistroController.delete);

module.exports = router;
