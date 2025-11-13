import express from "express";
import bancodados from './config/database.js'
import routerCliente from './router/cliente.js'
import routerGato from './router/gato.js'

const app = express()
app.use(express.json())

app.use('/api/v1', routerCliente, routerGato)

const port = 3000
bancodados.db
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log("Servidor rodando na porta: " + port)
    })
  })
  .catch((e) => {
    console.log("Não foi possível conectar com o banco: " + e)
  })