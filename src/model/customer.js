import database from '../config/database.js'

class Customer {
  constructor() {
    this.model = database.db.define('customer', {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: database.db.Sequelize.STRING
      },
      phone_number: {
        type: database.db.Sequelize.STRING(16), // formato E. 164 padrão internacional
        unique: true
      }
    })
  }
}

export default new Customer().model