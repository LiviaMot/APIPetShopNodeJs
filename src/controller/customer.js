import ServiceCustomer from '../service/customer.js'

class ControllerCustomer {
  async FindAll(_, res) {
    try {
      const customers = await ServiceCustomer.FindAll()

      res.status(200).send({
        data: customers
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async FindOne(req, res) {
    try {
      const { id } = req.params
      const customer = await ServiceCustomer.FindOne(id)

      res.status(200).send({
        data: customer
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Create(req, res) {
    try {
      const { name, phone_number } = req.body
      await ServiceCustomer.Create(name, phone_number)

      res.status(201).send({
        msg: 'Cliente criado com sucesso!'
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Update(req, res) {
    try {
      const id = req.params.id
      const { name, phone_number } = req.body

      await ServiceCustomer.Update(id, name, phone_number)

      res.status(200).send({
        msg: 'Cliente alterado com sucesso!'
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Delete(req, res) {
    try {
      const id = req.params.id
      await ServiceCustomer.Delete(id)

      res.status(204).send()
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

export default new ControllerCustomer()