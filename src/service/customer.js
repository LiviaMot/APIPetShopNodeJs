import Customer from '../model/customer.js'

class ServiceCustomer {
  async FindAll() {
    return Customer.findAll()
  }

  async FindOne(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }

    const customer = await Customer.findByPk(id)

    if (!customer) {
      throw new Error('Cliente não encontrado!')
    }

    return customer
  }

  async Create(name, phone_number) {
    Customer.create({
      name, phone_number
    })
  }

  async Update(id, name, phone_number) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }
    const oldCustomer = await Customer.findByPk(id)
    
    if (!oldCustomer) {
      throw new Error('Cliente não encontrado!')
    }

    oldCustomer.name = name || oldCustomer.name
    oldCustomer.phone_number = phone_number || oldCustomer.phone_number

    oldCustomer.save()
  }

  async Delete(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }

    const customer = await Customer.findByPk(id)
    if (!customer) {
     throw new Error('Cliente não encontrado!') 
    }

    await customer.destroy()
  }
}

export default new ServiceCustomer()