import ServiceCliente from '../service/cliente.js'

class ControllerCliente {
  async PegarTodos(req, res) {
    try {
      const clientes = await ServiceCliente.PegarTodos()

      res.status(200).send({
        data: clientes
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async PegarUm(req, res) {
    try {
      const { id } = req.params
      const cliente = await ServiceCliente.PegarUm(id)

      res.status(200).send({
        data: cliente
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Criar(req, res) {
    try {
      const { nome, telefone } = req.body
      await ServiceCliente.Criar(nome, telefone)

      res.status(201).send({
        msg: 'Produto criado com sucesso!'
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Alterar(req, res) {
    try {
      const id = req.params.id
      const { nome, telefone } = req.body

      await ServiceCliente.Alterar(id, nome, telefone)

      res.status(200).send({
        msg: 'Produto alterado com sucesso!'
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Deletar(req, res) {
    try {
      const id = req.params.id
      await ServiceCliente.Deletar(id)

      res.status(204).send()
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

export default new ControllerCliente()