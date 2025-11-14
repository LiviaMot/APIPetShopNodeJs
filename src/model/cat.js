import database from '../config/database.js'

class Cat {
  constructor() {
    this.model = database.db.define('cat', {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: database.db.Sequelize.STRING
      },
      breed: {
        type: database.db.Sequelize.STRING
      },
      gender: {
        type: database.db.Sequelize.STRING
      }
    })
  }
}

export default new Cat().model