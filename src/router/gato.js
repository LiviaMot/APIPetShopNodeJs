import express from "express"
import ControllerGato from '../controller/gato.js'

const router = express.Router()

router.get('/gatos', ControllerGato.PegarTodos)
router.get('/gatos/:id', ControllerGato.PegarUm)
router.post('/gatos', ControllerGato.Criar)
router.put('/gatos/:id', ControllerGato.Alterar)
router.delete('/gato/:id', ControllerGato.Deletar)

export default router