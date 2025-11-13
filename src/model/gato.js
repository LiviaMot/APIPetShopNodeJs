import bancodados from '../config/database.js'

class Gato {
  constructor() {
    this.model = bancodados.db.define('gatos', {
      id: {
        type: bancodados.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: bancodados.db.Sequelize.STRING
      },
      raca: {
        type: bancodados.db.Sequelize.STRING
      },
    })
  }
}

export default new Gato().model