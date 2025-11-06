import Cliente from '../model/cliente.js'

class ServiceCliente {
  async PegarTodos() {
    return Cliente.findAll()
  }

  async PegarUm(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }

    const cliente = await Cliente.findByPk(id)

    if (!cliente) {
      throw new Error('Cliente não encontrado!')
    }

    return cliente
  }

  async Criar(nome, telefone) {
    Cliente.create({
      nome, telefone
    })
  }

  async Alterar(id, nome, telefone) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }
    const clienteAntigo = await Cliente.findByPk(id)
    
    if (!clienteAntigo) {
      throw new Error('Cliente não encontrado!')
    }

    clienteAntigo.nome = nome || clienteAntigo.nome
    clienteAntigo.telefone = telefone || clienteAntigo.telefone

    clienteAntigo.save()
  }

  async Deletar(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }

    const cliente = await Cliente.findByPk(id)
    if (!cliente) {
     throw new Error('Cliente não encontrado!') 
    }

    await cliente.destroy()
  }
}

export default new ServiceCliente()