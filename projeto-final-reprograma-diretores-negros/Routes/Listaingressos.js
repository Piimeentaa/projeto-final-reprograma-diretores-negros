const express = require('express');
const router = express.Router();

const controller = require("../controllers/ListaingressosController")


router.get('', controller.getAll)
router.post('', controller.addCadastro)
router.post('/:filmeId/ingresso', controller.addIngresso)
// router.get('/:id', controller.getById)
// router.patch('/:id', controller.update)
// router.delete('/:id', controller.remove)
// router.patch('/treinar/:id', controller.treinar)

module.exports = router