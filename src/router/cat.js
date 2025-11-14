import express from "express"
import ControllerCat from '../controller/cat.js'

const router = express.Router()

router.get('/cats', ControllerCat.FindAll)
router.get('/cat/:id', ControllerCat.FindOne)
router.post('/cat', ControllerCat.Create)
router.put('/cat/:id', ControllerCat.Update)
router.delete('/cat/:id', ControllerCat.Delete)

export default router