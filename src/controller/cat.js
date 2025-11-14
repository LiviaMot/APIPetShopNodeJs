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
      res.status(200).send('gato')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Update(req, res) {
    try {
      res.status(200).send('gato')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Delete(req, res) {
    try {
      res.status(200).send('gato')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

export default new ControllerCat()