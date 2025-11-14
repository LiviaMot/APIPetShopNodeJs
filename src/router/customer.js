import express from "express"
import ControllerCustomer from '../controller/customer.js'

const router = express.Router()

router.get('/customers', ControllerCustomer.FindAll)
router.get('/customer/:id', ControllerCustomer.FindOne)
router.post('/customer', ControllerCustomer.Create)
router.put('/customer/:id', ControllerCustomer.Update)
router.delete('/customer/:id', ControllerCustomer.Delete)

export default router