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

  async Create(name, breed, gender) {
    Cat.create({
      name, breed, gender
    })
  }

  async Update(id, name, breed, gender) {
    if (!id) {
      throw new Error('Favor informar o ID!')      
    }
    const oldCat = await Cat.findByPk(id)

    if (!oldCat) {
      throw new Error('Gato não encontrado!')      
    }

    oldCat.name = name || oldCat.name
    oldCat.breed = breed || oldCat.breed
    oldCat.gender = gender || oldCat.gender

    oldCat.save()
  }

  async Delete(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')      
    }
    
    const cat = await Cat.findByPk(id)
    if (!cat) {
      throw new Error('Gato não encontrado!')  
    }
    
    await cat.destroy()
  }
}

export default new ServiceCat()