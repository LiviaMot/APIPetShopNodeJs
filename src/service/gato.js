import Gato from '../model/gato.js'

class ServiceGato {
  async PegarTodos() {
    return Gato.findAll()
  }

  async PegarUm(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }

    const gato = await Gato.findByPk(id)

    if (!gato) {
      throw new Error('Gato não encontrado!')
    }

    return gato
  }

  async Criar() {
    
  }

  async Alterar() {
    
  }

  async Deletar() {
    
  }
}

export default new ServiceGato()