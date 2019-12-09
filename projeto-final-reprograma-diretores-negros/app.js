const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const ingressos = require('./routes/Listaingressos')
const filmes = require('./routes/Listafilmes')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/ingressos', ingressos)
app.use('/filmes', filmes)

app.get('/', (request, response) => {
  response.send('Olá, mundo!')
})


app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
