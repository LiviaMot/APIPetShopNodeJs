import Cat from '../model/cat.js'

class ServiceCat {
  async FindAll() {
    return Cat.findAll()
  }

  async FindOne(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }

    const cat = await Cat.findByPk(id)

    if (!cat) {
      throw new Error('cat não encontrado!')
    }

    return cat
  }

  async Create() {
    
  }

  async Update() {
    
  }

  async Delete() {
    
  }
}

export default new ServiceCat()