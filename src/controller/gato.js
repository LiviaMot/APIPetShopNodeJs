import ServiceGato from '../service/gato.js'

class ControllerGato {
  async PegarTodos(_, res) {
    try {
      const gatos = await ServiceGato.PegarTodos()

      res.status(200).send({
        data: gatos
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async PegarUm(req, res) {
    try {
      const { id } = req.params
      const gato = await ServiceGato.PegarUm(id)

      res.status(200).send({
        data: gato
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Criar(req, res) {
    try {
      res.status(200).send('gato')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Alterar(req, res) {
    try {
      res.status(200).send('gato')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Deletar(req, res) {
    try {
      res.status(200).send('gato')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

export default new ControllerGato()