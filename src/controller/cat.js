import ServiceCat from '../service/cat.js'

class ControllerCat {
  async FindAll(_, res) {
    try {
      const cats = await ServiceCat.FindAll()

      res.status(200).send({
        data: cats
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async FindOne(req, res) {
    try {
      const { id } = req.params
      const cat = await ServiceCat.FindOne(id)

      res.status(200).send({
        data: cat
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Create(req, res) {
    try {
      const { name, breed, gender } = req.body
      await ServiceCat.Create(name, breed, gender)

      res.status(201).send({
        msg: 'Gato criado com sucesso!'
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Update(req, res) {
    try {
      const id = req.params.id
      const { name, breed, gender } = req.body

      await ServiceCat.Update(id, name, breed, gender)

      res.status(200).send({
        msg: 'Gato alterado com sucesso!'
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Delete(req, res) {
    try {
      const id = req.params.id

      await ServiceCat.Delete(id)

      res.status(204).send()
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

export default new ControllerCat()