import express from "express";
import database from './config/database.js'
import routerCustomer from './router/customer.js'
import routerCat from './router/cat.js'

const app = express()
app.use(express.json())

app.use('/api/v1', routerCustomer, routerCat)

const port = 3000
database.db
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log("Servidor rodando na porta: " + port)
    })
  })
  .catch((e) => {
    console.log("Não foi possível conectar com o banco: " + e)
  })