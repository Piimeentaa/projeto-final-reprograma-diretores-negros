const express = require('express');
const router = express.Router();
const controller = require("../controllers/ListaingressosController")


router.get('', controller.getAll)
router.post('', controller.addCadastro)
router.post('/:cadastroId/filme', controller.addIngresso)
router.get('/meucadastro/:id', controller.getById)
// router.patch('/:id', controller.update)
// router.delete('/:id', controller.remove)
// router.patch('/treinar/:id', controller.treinar)

module.exports = router